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

      <!-- Circle Button -->
      <div class="flex gap-2 flex-wrap items-start">
        <Button
          prefixIcon="icon-facebook-1"
          color="primary"
          type="filled"
          shape="circle"
          size="circle-medium"
        />
        <Button
          prefixIcon="icon-facebook-1"
          color="accent"
          type="filled"
          shape="circle"
          size="circle-medium"
        />
        <Button
          prefixIcon="icon-facebook-1"
          color="success"
          type="filled"
          shape="circle"
          size="circle-medium"
        />
        <Button
          prefixIcon="icon-facebook-1"
          color="info"
          type="filled"
          shape="circle"
          size="circle-medium"
        />
      </div>

      <!-- with Icon Button -->
      <div class="flex gap-2 flex-wrap items-start">
        <Button
          title="Button"
          suffixIcon="icon-arrow-single-right"
          color="primary"
          type="filled"
          shape="rounded"
          size="medium"
        />
      </div>
    </div>
  </div>

  <!-- GROUP BUTTON -->
  <div class="sp space-y-3 mt-5">
    <!-- Buttons Primary -->
    <h2 class="font-bold text-lg text-slate-600">GROUP BUTTONS</h2>
    <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
      <ButtonGroup
        :isIconBtnFirst="false"
        :prefixIcon="true"
        iconName="icon-alert-circle"
        title="Btn Combined"
        type="filled"
        color="primary"
        shape="pill"
        size="medium"
      />
    </div>
  </div>

  <!-- LINKS -->
  <div class="sp space-y-3 mt-5">
    <!-- Buttons Primary -->
    <h2 class="font-bold text-lg text-slate-600">LINKS</h2>
    <div class="flex gap-3 flex-wrap items-start border-b pb-6 mb-6">
      <Link
        title="Link Button"
        color="primary"
        size="medium"
        :url="'www.fb.com'"
      />

      <Link
        title="Link Button"
        color="accent"
        size="medium"
        :url="'www.fb.com'"
      />

      <Link
        title="Link Button"
        color="success"
        size="medium"
        :url="'www.fb.com'"
      />
      <Link
        title="Link Button"
        color="accent"
        prefix="icon-arrow-single-left"
        size="medium"
        :url="'www.fb.com'"
      />
      <Link
        title="Link Button"
        suffix="icon-arrow-single-right"
        color="success"
        size="medium"
        :url="'www.fb.com'"
      />
    </div>
  </div>

  <!-- CARD -->
  <div class="sp space-y-3 mt-5">
    <h2 class="font-bold text-lg text-slate-600">CARD</h2>

    <div class="flex gap-10 flex-wrap items-start border-b pb-6 mb-6">
      <!-- Vertical -->
      <Card
        imgSrc="../../src/assets/images/products/card-1.png"
        imgAlt="Apartment"
        :cardBody="true"
        :isHorizontal="false"
        cardClass="rounded-lg overflow-hidden shadow-medium"
        bodyClass="card-body p-5 space-y-2"
      >
        <template v-slot:badge>
          <div class="absolute top-0 z-10 p-4 gap-1 flex flex-col items-start">
            <Badge
              title="Verified"
              type="filled"
              color="success"
              size="small"
              shape="rounded"
            ></Badge>

            <Badge
              title="New"
              type="filled"
              color="info"
              size="small"
              shape="rounded"
            ></Badge>
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
      <Card
        imgSrc="../../src/assets/images/products/card-1.png"
        imgAlt="Apartment"
        :cardBody="true"
        :isHorizontal="true"
        cardClass="rounded-lg overflow-hidden shadow-medium"
        bodyClass="card-body p-5 space-y-2"
      >
        <template v-slot:badge>
          <div class="absolute top-0 z-10 p-4 gap-1 flex flex-col items-start">
            <Badge
              title="Verified"
              type="filled"
              color="success"
              size="small"
              shape="rounded"
            ></Badge>

            <Badge
              title="New"
              type="filled"
              color="info"
              size="small"
              shape="rounded"
            ></Badge>
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

      <!-- JOBS CARD -->
      <Card
        imgAlt="Apartment"
        :cardBody="true"
        :isHorizontal="false"
        cardClass="rounded-lg overflow-hidden shadow-medium"
        bodyClass="card-body p-5 space-y-2 relative bg-gray-200 hover:bg-white transition-300"
      >
        <!-- Body -->
        <template v-slot:card-body>
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

          <div
            class="absolute top-0 right-0 z-10 pt-3 pr-5 gap-1 flex flex-col items-start"
          >
            <Badge
              title="Hot"
              color="primary"
              type="translucent"
              size="small"
              shape="pill"
            ></Badge>
          </div>

          <div
            class="absolute bottom-0 right-0 z-10 pb-4 pr-6 gap-1 flex flex-col items-start"
          >
            <Button
              suffixIcon="icon-heart-default text-primary"
              type="filled"
              color="light"
              size="circle-medium"
              shape="circle"
              shadow="medium"
            ></Button>
          </div>
        </template>

        <template v-slot:card-footer>
          <hr class="pb-2 w-full" />
          <div class="flex text-sm gap-4">
            <p class="text-gray-700">
              <i class="icon-pin text-gray-600 me-1 align-middle"></i>New York
            </p>
            <p class="text-gray-700 text-sm">
              <i class="icon-cash-money text-gray-600 me-1 align-middle"></i
              >$10,000
            </p>
          </div></template
        >
      </Card>

      <!-- JOBS CARD -->
      <Card
        imgAlt="Apartment"
        :cardBody="true"
        :isHorizontal="false"
        cardClass="rounded-lg overflow-hidden shadow-small hover:shadow-medium"
        bodyClass="card-body p-5 space-y-2 relative bg-white hover:bg-white transition-300"
      >
        <!-- Body -->
        <template v-slot:card-body>
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

          <div
            class="absolute top-0 right-0 z-10 pt-3 pr-5 gap-1 flex flex-col items-start"
          >
            <Badge
              title="Hot"
              color="primary"
              type="translucent"
              size="small"
              shape="pill"
            ></Badge>
          </div>

          <div
            class="absolute bottom-0 right-0 z-10 pb-4 pr-6 gap-1 flex flex-col items-start"
          >
            <Button
              suffixIcon="icon-heart-default text-primary"
              type="filled"
              color="light"
              size="circle-medium"
              shape="circle"
              shadow="medium"
            ></Button>
          </div>
        </template>

        <template v-slot:card-footer>
          <hr class="pb-2 w-full" />
          <div class="flex text-sm gap-4">
            <p class="text-gray-700">
              <i class="icon-pin text-gray-600 me-1 align-middle"></i>New York
            </p>
            <p class="text-gray-700 text-sm">
              <i class="icon-cash-money text-gray-600 me-1 align-middle"></i
              >$10,000
            </p>
          </div></template
        >
      </Card>
    </div>
  </div>

  <!-- BADGES -->
  <div class="sp space-y-3 mt-5">
    <h2 class="font-bold text-lg text-slate-600">BADGE</h2>

    <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
      <Badge
        title="Badge"
        type="filled"
        color="primary"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="filled"
        color="accent"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="filled"
        color="success"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="filled"
        color="danger"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="filled"
        color="warning"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="outline"
        color="primary"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="outline"
        color="accent"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="outline"
        color="success"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="outline"
        color="danger"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="outline"
        color="warning"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="translucent"
        color="primary"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="translucent"
        color="accent"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="translucent"
        color="success"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="translucent"
        color="danger"
        size="medium"
        shape="rounded"
      ></Badge>

      <Badge
        title="Badge"
        type="translucent"
        color="warning"
        size="medium"
        shape="rounded"
      ></Badge>
    </div>
  </div>

  <!-- ICON BOX -->
  <div class="sp space-y-3 mt-5">
    <h2 class="font-bold text-lg text-slate-600">ICON BOX</h2>

    <div class="flex gap-6 flex-wrap items-start border-b pb-6 mb-6">
      <IconBox title="Hotels & Hotels">
        <template v-slot:icon>
          <div class="circle primary circle-lg">
            <i class="icon-bed"></i>
          </div>
        </template>
      </IconBox>

      <IconBox title="Hotels & Hotels">
        <template v-slot:icon>
          <div class="circle accent circle-lg">
            <i class="icon-bed"></i>
          </div>
        </template>
      </IconBox>

      <IconBox title="Hotels & Hotels">
        <template v-slot:icon>
          <div class="circle success circle-lg">
            <i class="icon-bed"></i>
          </div>
        </template>
      </IconBox>

      <IconBox
        title="Hotels & Hotels"
        direction="horizontal"
        bgColor="secondary"
      >
        <template v-slot:icon>
          <div class="circle-gray accent circle-lg">
            <i class="icon-bed"></i>
          </div>
        </template>
      </IconBox>

      <IconBox
        title="Hotels & Hotels"
        direction="horizontal"
        bgColor="secondary"
      >
        <template v-slot:icon>
          <div class="circle-gray primary circle-lg">
            <i class="icon-bed"></i>
          </div>
        </template>
      </IconBox>
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
