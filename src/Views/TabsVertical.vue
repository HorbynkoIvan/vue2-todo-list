<template>
  <v-container>
    <v-btn to="/" class="ma-2" outlined color="indigo">Home</v-btn>
    <h2 class="text-center">Tabs Vertical</h2>
    <v-divider/>
    <v-card class="how-tabs">
      <v-tabs vertical class="tabs">
        <v-tab class="tab flex">
          <div class="tab-index">01</div>
          <div class="tab-block">
            <p class="text1">CREATE AN ACCOUNT</p>
            <p class="text2">Choose a Seller’s Package</p>
          </div>
        </v-tab>
        <v-tab class="tab flex">
          <div class="tab-index">02</div>
          <div class="tab-block">
            <p class="text1">SCHEDULE A SESSION WITH</p>
            <p class="text2">One of our Agents</p>
          </div>
        </v-tab>
        <v-tab class="tab flex">
          <div class="tab-index">03</div>
          <div class="tab-block">
            <p class="text1">APPROVAL AND TRANSACTION,</p>
            <p class="text2">Let the Photoshoot Begin</p>
          </div>
        </v-tab>
        <v-tab class="tab flex">
          <div class="tab-index">04</div>
          <div class="tab-block">
            <p class="text1">MANAGE YOUR LISTING ONLINE,</p>
            <p class="text2">Make a Sale</p>
          </div>
        </v-tab>

        <v-tab-item>
          <v-card flat tile>
            <v-img src="../assets/images/how_it_works/how_it_works1.png"></v-img>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
              Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
            </v-card-text>
            <Link href='https://www.w3schools.com/' class="" text="LEARN MORE"/>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat tile>
            <v-img src="../assets/images/how_it_works/how_it_works2.jpg"></v-img>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
              Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
            </v-card-text>
            <Link href='https://www.w3schools.com/' class="" text="LEARN MORE"/>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat tile>
            <v-img src="../assets/images/how_it_works/how_it_works3.jpg"></v-img>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
              Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
            </v-card-text>
            <Link href='https://www.w3schools.com/' class="" text="LEARN MORE"/>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat tile>
            <v-img src="../assets/images/how_it_works/how_it_works4.jpg"></v-img>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
              Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
            </v-card-text>
            <Link href='https://www.w3schools.com/' class="" text="LEARN MORE"/>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'TabsVertical',
  components: {
  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style lang="scss">
  .how-tabs {
    margin-top: 50px;
    .v-tabs {
      .v-tab {
        width: 565px;
        max-width: 100%;
        height: auto;
        padding: 27px 0 21px 77px;
        border-radius: 0;
        justify-content: start;

        .tab-index {
          margin: 0 23px 0 0;
          color: #000;
          font-size: 40px;
          font-weight: 400;
        }

        .tab-block {
          text-align: left;

          p {
            margin: 0;
          }

          .text1 {
            color: #000;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.88px;
            line-height: 18px;
            text-transform: uppercase;
          }

          .text2 {
            color: #000;
            font-size: 25px;
            font-weight: 400;
          }
        }

        &.v-tab--active {
          background: #000;

          .tab-index {
            color: yellow;
          }

          .tab-block {
            .text1 {
              color: yellow;
            }

            .text2 {
              color: yellow;
            }
          }
        }
      }

      .v-tabs-items{
        .v-card {
          .v-card__text {
            padding-left: 0;
          }
        }
      }
    }
  }
</style>
