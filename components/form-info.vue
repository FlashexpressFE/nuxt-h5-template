<template>
  <div class="form-info">
    <section class="banner">
      <h2>{{ $t("free") }}</h2>

      <Form @submit="onSubmit" :show-error-message="false">
        <Field v-model="ruleForm.name" :placeholder="$t('66')" :rules="rules.name" />
        <Field v-model="ruleForm.comname" :placeholder="$t('67')" :rules="rules.comname" />
        <Field v-model="ruleForm.email" :placeholder="$t('68')" :rules="rules.email" />
        <Field v-model="ruleForm.phone" type="tel" :placeholder="$t('78')" :rules="rules.phone" />
        <Field
          :value="ruleForm.number"
          clickable
          readonly
          :placeholder="$t('70')"
          :rules="rules.number"
          @click="showPicker = true"
        />
        <p>
          {{ $t("96") }}
        </p>
        <button>{{ $t("83") }}</button>
      </Form>
    </section>
    <Popup v-model="showPicker" position="bottom">
      <Picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
    </Popup>
    <Popup v-model="show"
      ><p>{{ $t("72") }}</p></Popup
    >
  </div>
</template>

<script>
import { Form, Field, Button, Popup, Picker } from "vant";
export default {
  components: { Form, Field, Button, Popup, Picker },
  props: {
    category: { type: String },
    label: { type: String },
  },
  data() {
    return {
      columns: ["1-50", "51-200", "201-500", "501-1000", "1000 + "],
      showPicker: false,
      show: false,
      ruleForm: {
        name: "",
        comname: "",
        email: "",
        phone: "",
        number: "",
        index: ""
      },
      rules: {
        name: [{ required: true, trigger: "blur" }],
        comname: [{ required: true, trigger: "blur" }],
        email: [{ required: true, trigger: "blur" }],
        phone: [{ required: true, trigger: "blur" }],
        number: [{ required: true, trigger: "blur" }]
      }
    };
  },
  methods: {
    onConfirm(value, index) {
      this.ruleForm.number = value;
      this.ruleForm.index = index + 1;
      this.showPicker = false;
    },
    onSubmit() {
      this.$axios
        .post("/auth/tryout/create", {
          company_name: this.ruleForm.comname,
          email: this.ruleForm.email,
          first_name: this.ruleForm.name,
          mobile: this.ruleForm.phone,
          number: this.ruleForm.index
        })
        .then(res => {
          if (res && res.code === 1) {
            this.show = true;
          }
        });
      // 立即试用埋点
      this.$ga.event('FHRContact', 'click', 'BottomTrialButton', 3)
    }
  }
};
</script>

<style lang="less" scoped>
.form-info {
  background: #1592ff;

  .banner {
    width: 92%;
    margin: 0 auto;
    padding: 0.24rem 0;
    h2 {
      color: #fff;
      text-align: center;
      font-size: 0.18rem;
      line-height: 0.25rem;
      font-weight: 500;
    }
    form {
      text-align: center;
      button {
        padding: 0.07rem 0.24rem;
        border-radius: 5px;
        border: none;
        color: #1592ff;
        background: #fff;
        font-size: 0.14rem;
        margin: 0.16rem auto;
      }
      p {
        color: #e8e9eb;
        font-size: 0.12rem;
        line-height: 0.17rem;
        text-align: left;
      }

      /deep/.van-cell {
        margin: 0.16rem 0;
      }
    }
  }
}
/deep/.van-popup {
  padding: 0.16rem;
  font-size: 0.14rem;
  border-radius: 4px;
}
</style>
