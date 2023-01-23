<template>
  <div class="contact-container">
    <div class="contact-form">
      <div class="contact-form-line">
        <label for="email_address">Votre adresse email :</label>
        <input
          type="email"
          name="email_address"
          id="email_address"
          placeholder="exemple@gmail.com"
          v-model="contact_form.email_address"
        />
      </div>
      <div class="contact-form-line">
        <label for="reason">Raison de la prise de contact :</label>
        <select name="reason" id="reason" v-model="contact_form.reason">
          <option value="">Veuillez choisir une option</option>
          <option value="consulting">Consulting</option>
          <option value="dev_site_vitrine">
            Développement d'un site vitrine
          </option>
          <option value="dev_site_ecommerce">
            Développement d'un site e-commerce
          </option>
          <option value="dev_autre">
            Développement autre (plugin, application, etc...)
          </option>
        </select>
      </div>
      <div class="contact-form-line">
        <label for="maquette"
          >Possédez-vous une maquette pour votre site ?</label
        >
        <select name="maquette" id="maquette" v-model="contact_form.maquette">
          <option value="">Veuillez choisir une option</option>
          <option value="oui">Oui</option>
          <option value="non">Non</option>
        </select>
      </div>
      <div class="contact-form-line">
        <label for="explanation"
          >Décrivez votre projet en quelques phrases :</label
        >
        <textarea
          placeholder="Mon projet concerne un site de vente de vinyle..."
          rows="5"
          cols="50"
          name="explanation"
          id="explanation"
          v-model="contact_form.explanation"
        ></textarea>
      </div>
      <div class="contact-form-line">
        <button type="submit" @click="envoie_mail()">Envoyer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: function () {
    return {
      contact_form: {
        email_address: "",
        reason: "",
        maquette: "",
        explanation: "",
      },
    };
  },
  methods: {
    envoie_mail: async function () {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.contact_form),
      };
      await fetch(
   this.$root.url_api + "/api/envoie_email",
        requestOptions
      );

      this.$toast.success("Votre message a bien été envoyé !");

      this.contact_form = {
        email_address: "",
        reason: "",
        maquette: "",
        explanation: "",
      };
    },
  },
};
</script>

<style scoped></style>
