<template>
  <div class="form-info">
    <section class="banner">
      <Form @submit="onSubmit" :show-error-message="false">
        <Field v-model="ruleForm.name" :placeholder="$t('66')" :rules="rules.name" />
        <Field v-model="ruleForm.phone" type="tel" :placeholder="$t('78')" :rules="rules.phone" />
        <Field v-model="ruleForm.email" :placeholder="$t('68')" :rules="rules.email" />
        <Field v-model="ruleForm.title" :placeholder="$t('89')" :rules="rules.title" />
        <Field
          v-model="ruleForm.word"
          :placeholder="$t('90')"
          rows="2"
          autosize
          type="textarea"
          maxlength="500"
          :rules="rules.word"
          show-word-limit
        />
        <button>{{ $t("83") }}</button>
      </Form>
    </section>
    <Popup v-model="show"
      ><p>{{ $t("72") }}</p></Popup
    >
  </div>
</template>

<script>
import { Form, Field, Button, Popup } from "vant";
export default {
  components: { Form, Field, Button, Popup },
  data() {
    return {
      show: false,
      ruleForm: {
        name: "",
        phone: "",
        email: "",
        title: "",
        word: ""
      },
      rules: {
        name: [{ required: true, trigger: "blur" }],
        title: [{ required: true, trigger: "blur" }],
        email: [{ required: true, trigger: "blur" }],
        phone: [{ required: true, trigger: "blur" }],
        word: [{ required: true, trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$axios
        .post("/auth/tryout/create", {
          email: this.ruleForm.email,
          first_name: this.ruleForm.name,
          mobile: this.ruleForm.phone,
          email_subject: this.ruleForm.emailtitle,
          email_content: this.ruleForm.word
        })

        .then(res => {
          if (res && res.code === 1) {
            this.show = true;
          }
        });
      // 立即试用埋点
      this.$ga.event(category, 'click', label, 2)
    }
  }
};
</script>

<style lang="less" scoped>
.form-info {
  background: #ffffff;
  .banner {
    width: 92%;
    margin: 0 auto;
    padding: 0.24rem 0;
    form {
      text-align: center;
      button {
        padding: 0.07rem 0.56rem;
        border-radius: 5px;
        border: none;
        color: #fff;
        background: #1592ff;
        font-size: 0.16rem;
        margin: 0.16rem auto;
      }

      /deep/.van-cell {
        margin: 0.16rem 0;
        border: 1px solid #eee;
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
