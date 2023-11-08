<template>
  <Header />

  <!-- BUTTON -->
  <div class="sp space-y-3 mt-5">
    <!-- Buttons Primary -->
    <h2
      class="font-bold text-lg text-slate-600 dark:text-gray-200 text-center uppercase"
    >
      Button
    </h2>

    <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
      <!-- Filled Button -->
      <div class="flex gap-2 flex-wrap items-start">
        <Button
          title="Button"
          color="primary"
          type="filled"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="accent"
          type="filled"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="secondary"
          type="filled"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="success"
          type="filled"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="danger"
          type="filled"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="warning"
          type="filled"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="info"
          type="filled"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="dark"
          type="filled"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="light"
          type="filled"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="disabled"
          type="filled"
          shape="rounded"
          size="medium"
        />
      </div>

      <!-- Outline Button -->
      <div class="flex gap-2 flex-wrap items-start">
        <Button
          title="Button"
          color="primary"
          type="outline"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="accent"
          type="outline"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="secondary"
          type="outline"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="success"
          type="outline"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="danger"
          type="outline"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="warning"
          type="outline"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="info"
          type="outline"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="dark"
          type="outline"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="light"
          type="outline"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="disabled"
          type="outline"
          shape="rounded"
          size="medium"
        />
      </div>

      <!-- Translucent Button -->
      <div class="flex gap-2 flex-wrap items-start">
        <Button
          title="Button"
          color="primary"
          type="translucent"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="accent"
          type="translucent"
          shape="rounded"
          size="medium"
        />

        <Button
          title="Button"
          color="success"
          type="translucent"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="danger"
          type="translucent"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="warning"
          type="translucent"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="info"
          type="translucent"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="dark"
          type="translucent"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="light"
          type="translucent"
          shape="rounded"
          size="medium"
        />
        <Button
          title="Button"
          color="disabled"
          type="translucent"
          shape="rounded"
          size="medium"
        />
      </div>

      <!-- CIRCLE BUTTON -->
      <!-- <Button
        suffix="icon-heart-default"
        type="primary"
        size="circle-default"
        shape="circle"
        shadow="default"
      ></Button>
      <Button
        suffix="icon-heart-default"
        type="secondary"
        size="circle-default"
        shape="circle"
        shadow="default"
      ></Button>
      <Button
        suffix="icon-heart-default"
        type="info"
        size="circle-default"
        shape="circle"
        shadow="default"
      ></Button>
      <Button
        suffix="icon-heart-default"
        type="success"
        size="circle-default"
        shape="circle"
        shadow="default"
      ></Button>
      <Button
        suffix="icon-heart-default"
        type="danger"
        size="circle-default"
        shape="circle"
        shadow="default"
      ></Button>
      <Button
        suffix="icon-heart-default"
        type="warning"
        size="circle-default"
        shape="circle"
        shadow="default"
      ></Button> -->

      <!-- Small Buttons Primary -->
      <!-- <Button title="SM Primary" type="primary" size="sm" shape="default" />
      <Button title="SM Accent" type="accent" size="sm" shape="default" />
      <Button title="SM Secondary" type="secondary" size="sm" shape="default" />
      <Button title="SM Success" type="success" size="sm" shape="default" />
      <Button title="SM Danger" type="danger" size="sm" shape="default" /> -->

      <!-- Extra Small Buttons Primary -->
      <!-- <Button title="XS Primary" type="primary" size="xs" shape="default" />
      <Button title="XS Accent" type="accent" size="xs" shape="default" />
      <Button title="XS Secondary" type="secondary" size="xs" shape="default" />
      <Button title="XS Success" type="success" size="xs" shape="default" />
      <Button title="XS Danger" type="danger" size="xs" shape="default" /> -->

      <!-- Big Size Buttons Primary -->
      <!-- <Button title="LG Warning" type="warning" size="lg" shape="default" />
      <Button title="LG Dark" type="dark" size="lg" shape="default" />
      <Button title="LG Light" type="light" size="lg" shape="default" /> -->

      <!-- Shape Sm Rounded -->
      <!-- <Button title="Primary" type="primary" size="default" shape="sm" />
      <Button title="Accent" type="accent" size="default" shape="sm" />
      <Button title="Secondary" type="secondary" size="default" shape="sm" />
      <Button title="Success" type="success" size="default" shape="sm" />
      <Button title="Danger" type="danger" size="default" shape="sm" />
      <Button title="Warning" type="warning" size="default" shape="sm" />
      <Button title="Info" type="info" size="default" shape="sm" />
      <Button title="Dark" type="dark" size="default" shape="sm" />
      <Button title="Light" type="light" size="default" shape="sm" /> -->

      <!-- Icon Primary -->
      <!-- <Button
        title="Primary"
        type="primary"
        suffix="icon-arrow-single-right"
        size="default"
        shape="default"
      />
      <Button
        title="Accent"
        type="accent"
        size="default"
        suffix="icon-arrow-single-right"
        shape="default"
      />
      <Button
        title="Success"
        type="success"
        suffix="icon-arrow-single-right"
        size="default"
        shape="default"
      /> -->

      <!-- Icon Primary -->
      <!-- <Button
        title="Primary"
        type="primary"
        prefix="icon-default-user"
        size="default"
        shape="default"
      />
      <Button
        title="Accent"
        type="accent"
        size="default"
        prefix="icon-default-user"
        shape="default"
      />
      <Button
        title="Success"
        type="success"
        prefix="icon-default-user"
        size="default"
        shape="default"
      /> -->

      <!-- Outline Variation -->
      <!-- <Button title="Primary" type="out-primary" size="default" shape="sm" />
      <Button title="Accent" type="out-accent" size="default" shape="sm" />
      <Button
        title="Secondary"
        type="out-secondary"
        size="default"
        shape="sm"
      />
      <Button title="Success" type="out-success" size="default" shape="sm" /> -->

      <!-- Translucent Variation -->
      <!-- <Button title="primary" type="trans-primary" size="default" shape="sm" />
      <Button title="Accent" type="trans-accent" size="default" shape="sm" />
      <Button title="Success" type="trans-success" size="default" shape="sm" />
      <Button title="Danger" type="trans-danger" size="default" shape="sm" /> -->
    </div>
  </div>

  <!-- GROUP BUTTON -->
  <div class="sp space-y-3 mt-5">
    <!-- Buttons Primary -->
    <h2 class="font-bold text-lg text-slate-600">GROUP BUTTONS</h2>
    <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
      <ButtonGroup
        :prefixIcon="true"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="primary"
        shape="default"
        size="default"
        type="submit"
      />

      <!-- <ButtonGroup
        :prefixIcon="true"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="accent"
        shape="default"
        size="default"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="true"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="success"
        shape="default"
        size="default"
        type="submit"
      />
      <ButtonGroup
        :prefixIcon="true"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="primary"
        shape="default"
        size="default"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="false"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="accent"
        shape="default"
        size="default"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="false"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="success"
        shape="default"
        size="default"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="false"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="primary"
        shape="default"
        size="sm"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="true"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="accent"
        shape="default"
        size="sm"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="true"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="success"
        shape="default"
        size="sm"
        type="submit"
      />-->
    </div>
  </div>

  <!-- LINKS -->
  <div class="sp space-y-3 mt-5">
    <!-- Buttons Primary -->
    <h2 class="font-bold text-lg text-slate-600">LINKS</h2>
    <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
      <!-- <Link
        title="Link Button"
        color="primary"
        size="default"
        :url="'www.fb.com'"
      />
      <Link
        title="Link Button"
        color="accent"
        prefix="icon-arrow-single-left"
        size="default"
        :url="'www.fb.com'"
      />
      <Link
        title="Link Button"
        suffix="icon-arrow-single-right"
        color="success"
        size="default"
        :url="'www.fb.com'"
      />

      <Link title="Link Button" color="primary" :url="'www.fb.com'" size="lg" />
      <Link title="Link Button" color="primary" :url="'www.fb.com'" size="sm" /> -->
    </div>
  </div>

  <!-- CARD -->
  <div class="sp space-y-3 mt-5">
    <h2 class="font-bold text-lg text-slate-600">CARD</h2>

    <div class="flex gap-10 flex-wrap items-start border-b pb-6 mb-6">
      <!-- Basic Version -->
      <!-- <Card
        imgSrc="../../src/assets/images/products/card-1.png"
        imgAlt="Apartment"
      >
        <template v-slot:card-body>
          <div class="card-body p-5 space-y-2">
            <p class="text-primary text-xs">FOR RENT</p>
            <h2
              class="text-gray-800 hover:text-primary cursor-pointer font-bold truncate"
            >
              2-bed Apartment | 120 m2
            </h2>
            <p class="text-gray-600 text-sm trun">
              28 jckson Avue Long Island City, NY
            </p>
            <p class="pb-2">
              <i class="icon-cash-money text-gray-600 me-2 align-middle"></i
              ><span class="text-gray-700 font-bold">$28000</span>
            </p>

            <hr class="pb-2" />
            <div class="flex text-sm gap-6 justify-center">
              <p class="text-gray-700">
                2<i class="icon-bed text-gray-600 ms-2 align-middle"></i>
              </p>
              <p class="text-gray-700">
                1<i class="icon-bath text-gray-600 ms-2 align-middle"></i>
              </p>
              <p class="text-gray-700">
                2<i class="icon-car text-gray-600 ms-2 align-middle"></i>
              </p>
            </div>
          </div>
        </template>
      </Card> -->

      <!-- With Bage & Heart Icon -->
      <Card
        imgSrc="../../src/assets/images/products/card-1.png"
        imgAlt="Apartment"
        :cardBody="true"
        cardClass="rounded-lg overflow-hidden shadow-medium"
        bodyClass="card-body p-5 space-y-2"
      >
        <template v-slot:badge>
          <div class="absolute top-0 z-10 p-4 gap-1 flex flex-col items-start">
            <Badge
              title="Verified"
              type="success"
              size="default"
              shape="sm"
            ></Badge>

            <Badge title="New" type="info" size="default" shape="sm"></Badge>
          </div>
        </template>

        <!-- Body -->
        <template v-slot:card-body>
          <p class="text-primary text-xs">FOR RENT</p>
          <h2
            class="text-gray-800 hover:text-primary cursor-pointer font-bold truncate"
          >
            2-bed Apartment | 120 m2
          </h2>
          <p class="text-gray-600 text-sm trun">
            28 jckson Avue Long Island City, NY
          </p>
          <p class="pb-2">
            <i class="icon-cash-money text-gray-600 me-2 align-middle"></i
            ><span class="text-gray-700 font-bold">$28000</span>
          </p>
        </template>

        <template v-slot:card-footer>
          <hr class="pb-2 w-full" />
          <div class="flex text-sm gap-6 justify-center">
            <p class="text-gray-700">
              2<i class="icon-bed text-gray-600 ms-2 align-middle"></i>
            </p>
            <p class="text-gray-700">
              1<i class="icon-bath text-gray-600 ms-2 align-middle"></i>
            </p>
            <p class="text-gray-700">
              2<i class="icon-car text-gray-600 ms-2 align-middle"></i>
            </p></div
        ></template>
      </Card>

      <!-- Horizontal -->
      <!-- <Card
        imgSrc="../../src/assets/images/products/card-1.png"
        imgAlt="Apartment"
        variant="horizontal"
      >
        <template v-slot:badge>
          <div class="absolute top-0 z-10 p-4 gap-1 flex flex-col items-start">
            <Badge
              title="Verified"
              type="success"
              size="default"
              shape="sm"
            ></Badge>

            <Badge title="New" type="info" size="default" shape="sm"></Badge>
          </div>
        </template>

        <template v-slot:heart>
          <div
            class="card-heart-icon absolute top-0 right-0 z-10 p-4 gap-1 flex flex-col items-start"
          >
            <Button
              suffix="icon-heart-default text-primary"
              type="light"
              size="circle-default"
              shape="circle"
              shadow="default"
            ></Button>
          </div>
        </template>

        <template v-slot:card-body>
          <div class="card-body p-5 space-y-2">
            <p class="text-primary text-xs">FOR RENT</p>
            <h2
              class="text-gray-800 hover:text-primary cursor-pointer font-bold truncate"
            >
              2-bed Apartment | 120 m2
            </h2>
            <p class="text-gray-600 text-sm trun">
              28 jckson Avue Long Island City, NY
            </p>
            <p class="pb-2">
              <i class="icon-cash-money text-gray-600 me-2 align-middle"></i
              ><span class="text-gray-700 font-bold">$28000</span>
            </p>

            <hr class="pb-2" />
            <div class="flex text-sm gap-6 justify-center">
              <p class="text-gray-700">
                2<i class="icon-bed text-gray-600 ms-2 align-middle"></i>
              </p>
              <p class="text-gray-700">
                1<i class="icon-bath text-gray-600 ms-2 align-middle"></i>
              </p>
              <p class="text-gray-700">
                2<i class="icon-car text-gray-600 ms-2 align-middle"></i>
              </p>
            </div>
          </div>
        </template>
      </Card> -->

      <!-- JOBS CARD -->
      <!-- <Card>
        <template v-slot:card-body>
          <div
            class="card-body p-5 space-y-2 relative bg-gray-200 hover:bg-white transition-300"
          >
            <p class="text-primary text-xs">IT Pro TV</p>
            <h2
              class="text-gray-800 hover:text-primary cursor-pointer font-bold truncate"
            >
              Business Analyst
            </h2>
            <p class="text-gray-600 text-sm trun">
              Integer condimentum nulla risus convallis. Convallis penatibus
              pretium vel odio vulputate et, a, enim. Accumsan, phasellus nunc
              tincidunt turpis eget...
            </p>

            <hr class="pb-2" />
            <div class="flex text-sm gap-4">
              <p class="text-gray-700">
                <i class="icon-pin text-gray-600 me-1 align-middle"></i>New York
              </p>
              <p class="text-gray-700 text-sm">
                <i class="icon-cash-money text-gray-600 me-1 align-middle"></i
                >$10,000
              </p>
            </div>

            <div
              class="absolute top-0 right-0 z-10 pt-3 pr-5 gap-1 flex flex-col items-start"
            >
              <Badge
                title="Hot"
                type="trans-primary"
                size="default"
                shape="sm"
              ></Badge>
            </div>

            <div
              class="absolute bottom-0 right-0 z-10 pb-4 pr-6 gap-1 flex flex-col items-start"
            >
              <Button
                suffix="icon-heart-default text-primary"
                type="light"
                size="circle-default"
                shape="circle"
                shadow="default"
              ></Button>
            </div>
          </div>
        </template>
      </Card> -->

      <!-- JOBS CARD -->
      <!-- <Card>
        <template v-slot:card-body>
          <div
            class="card-body p-5 space-y-2 relative bg-gray-200 hover:bg-white transition-300"
          >
            <div class="flex gap-2 items-center">
              <p class="text-primary text-xs">IT Pro TV</p>
              <Badge
                title="Featured"
                type="trans-info"
                size="sm"
                shape="default"
              ></Badge>
            </div>

            <h2
              class="text-gray-800 hover:text-primary cursor-pointer font-bold truncate"
            >
              Business Analyst
            </h2>

            <div class="flex text-sm gap-4">
              <p class="text-gray-700">
                <i class="icon-pin text-gray-600 me-1 align-middle"></i>New York
              </p>
              <p class="text-gray-700 text-sm">
                <i class="icon-cash-money text-gray-600 me-1 align-middle"></i
                >$10,000
              </p>

              <div
                class="absolute top-0 right-0 z-10 pt-4 pr-4 gap-1 flex flex-col items-start"
              >
                <Button
                  suffix="icon-dots-vertical"
                  type="light"
                  size="circle-default"
                  shape="circle"
                  shadow="default"
                ></Button>
              </div>
            </div>
          </div>
        </template>
      </Card> -->

      <!-- CITY -->
      <!-- <Card
        imgSrc="../../src/assets/images/products/card-1.png"
        imgAlt="Apartment"
      >
        <template v-slot:card-body>
          <div
            class="card-body p-5 space-y-2 relative bg-gray-200 hover:bg-white transition-300"
          >
            <h2
              class="text-gray-800 hover:text-primary cursor-pointer font-bold truncate text-center"
            >
              Business Analyst
            </h2>
          </div>
        </template>
      </Card> -->
      <!-- End -->
    </div>
  </div>

  <!-- BADGES -->
  <!-- <div class="sp space-y-3 mt-5">
    <h2 class="font-bold text-lg text-slate-600">BADGE</h2>

    <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
      <Badge
        title="Badge"
        type="primary"
        size="default"
        shape="default"
      ></Badge>
      <Badge title="Badge" type="accent" size="default" shape="default"></Badge>
      <Badge
        title="Badge"
        type="secondary"
        size="default"
        shape="default"
      ></Badge>
      <Badge
        title="Badge"
        type="success"
        size="default"
        shape="default"
      ></Badge>
      <Badge title="Badge" type="danger" size="default" shape="default"></Badge>

      <Badge
        title="Badge"
        type="trans-primary"
        size="default"
        shape="default"
      ></Badge>
      <Badge title="Badge" type="accent" size="default" shape="default"></Badge>
      <Badge
        title="Badge"
        type="trans-secondary"
        size="default"
        shape="default"
      ></Badge>
      <Badge
        title="Badge"
        type="trans-success"
        size="default"
        shape="default"
      ></Badge>
      <Badge
        title="Badge"
        type="trans-danger"
        size="default"
        shape="default"
      ></Badge>

      <Badge
        title="Badge"
        type="out-accent"
        size="default"
        shape="default"
      ></Badge>
      <Badge
        title="Badge"
        type="out-primary"
        size="default"
        shape="default"
      ></Badge>
      <Badge
        title="Badge"
        type="out-success"
        size="default"
        shape="default"
      ></Badge>
    </div>
  </div> -->

  <!-- ICON BOX -->
  <div class="sp space-y-3 mt-5">
    <h2 class="font-bold text-lg text-slate-600">ICON BOX</h2>

    <div class="flex gap-6 flex-wrap items-start border-b pb-6 mb-6">
      <IconBox title="Hotels & Hotels">
        <template v-slot:icon>
          <Button
            class="iprimary"
            suffix="icon-bed"
            type="iprimary"
            size="circle-lg"
            shape="circle"
          />
        </template>
      </IconBox>

      <!-- <IconBox layout="horizontal">
        <template v-slot:icon>
          <Button
            class="iprimary"
            suffix="icon-bed"
            type="iprimary"
            size="circle-lg"
            shape="circle"
          />
        </template>
      </IconBox>

      <IconBox layout="vertical" boxBg="gray">
        <template v-slot:icon>
          <Button
            class="iprimary"
            suffix="icon-bed"
            type="iprimary"
            size="circle-lg"
            shape="circle"
          />
        </template>
      </IconBox>

      <IconBox layout="horizontal" boxBg="gray">
        <template v-slot:icon>
          <Button
            class="iprimary"
            suffix="icon-bed"
            type="iprimary"
            size="circle-lg"
            shape="circle"
          />
        </template>
      </IconBox>

      <IconBox layout="vertical">
        <template v-slot:icon>
          <Button
            class="iaccent"
            suffix="icon-bed"
            type="iaccent"
            size="circle-lg"
            shape="circle"
          />
        </template>
      </IconBox>

      <IconBox layout="horizontal">
        <template v-slot:icon>
          <Button
            class="iaccent"
            suffix="icon-bed"
            type="iaccent"
            size="circle-lg"
            shape="circle"
          />
        </template>
      </IconBox>

      <IconBox layout="vertical">
        <template v-slot:icon>
          <Button
            class="isuccess"
            suffix="icon-bed"
            type="isuccess"
            size="circle-lg"
            shape="circle"
          />
        </template>
      </IconBox>

      <IconBox layout="horizontal">
        <template v-slot:icon>
          <Button
            class="isuccess"
            suffix="icon-bed"
            type="isuccess"
            size="circle-lg"
            shape="circle"
          />
        </template>
      </IconBox> -->
    </div>
  </div>

  <!-- FORM -->
  <!-- <div class="sp space-y-3 mt-5">
    <h2 class="font-bold text-lg text-slate-600">FORM</h2>

    <div class="flex gap-6 flex-wrap items-start border-b pb-6 mb-6">
      <FormInput
        id="idName"
        label="Input Size Default"
        inputType="default"
        placeholder="Placeholder"
        size="default"
      />

      <FormInput
        id="idName"
        label="Input Size Medium"
        inputType="default"
        placeholder="Placeholder"
        size="md"
      />

      <FormInput
        id="idName"
        label="Input Size Small"
        inputType="default"
        placeholder="Placeholder"
        size="sm"
      />
    </div>
  </div> -->

  <!-- Gap -->
  <div class="py-60"></div>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { reactive, ref } from "vue";
import Header from "./components/Header.vue";
import Button from "./components/buttons/Button.vue";
// import Button_V2 from "./components/buttons/Button_V2.vue";
import ButtonV4 from "./components/buttons/Button-V4.vue";
import ButtonGroup from "./components/buttons/ButtonGroup.vue";
import Link from "./components/Link.vue";
import Card from "./components/Card.vue";
import Badge from "./components/Badge.vue";
import IconBox from "./components/icon/IconBox.vue";

// import FormSelect from "./components/form/FormSelect.vue";
import FormInput from "./components/form/FormInput.vue";
// import Checkbox from "./components/form/Checkbox.vue";

const formFields = reactive({ email: "", name: "", password: "" });
const selected = ref("");
const countries = ref([
  { value: "", name: "Coose a country" },
  { value: "us", name: "United States" },
  { value: "ca", name: "Canada" },
  { value: "fr", name: "France" },
]);
</script>
