<script setup lang="ts">
import type { Blog } from "~/types/schema.type";
const dummy: Blog = {
  slug: "introduction-to-web-development",
  title: "Introduction to Web Development",
  content: `        Lorem ipsum dolor sit amet consectetur. Sed vel diam sem auctor
        dignissim velit. Auctor erat pellentesque ornare felis laoreet. At
        faucibus risus nunc arcu dictum netus semper arcu. Tristique volutpat
        vel tristique risus. Arcu tempus cursus turpis facilisis magna nec augue
        volutpat. Aliquam sociis gravida vitae consectetur ac condimentum.
        Rhoncus enim nibh vitae egestas accumsan. Phasellus mauris sapien et
        lacus a ipsum. Et leo nulla curabitur posuere. Nunc gravida et lacus
        urna. Massa maecenas varius tempus mattis arcu venenatis consequat
        congue. Et tristique arcu netus mattis. Varius dolor a ac lacus. Felis
        et sem elementum cras. Egestas tempus bibendum senectus pellentesque a
        urna tincidunt. Bibendum a tempus ut turpis pellentesque ipsum nulla. Ut
        auctor aenean euismod enim ullamcorper mauris augue dui lectus. Nulla
        libero mauris dolor id praesent at. Vitae aliquam faucibus in posuere
        morbi facilisi gravida. Enim gravida non tempus magna fringilla leo
        odio. Ornare dui arcu nunc vitae lobortis tellus id. Eu velit adipiscing
        nam tincidunt tellus fames at posuere. Fermentum accumsan malesuada mi
        non porttitor eget diam. Nulla tincidunt molestie posuere bibendum quam
        diam. Turpis sit nisl eget dictum aliquet nulla in congue donec.`,
  image:
    "https://i.pinimg.com/736x/f6/f5/0d/f6f50d5f97407b67d8bddc20056b9917.jpg",
  publishedAt: "2025-08-20T10:00:00Z",
  author: "John Doe",
  createdAt: "2025-08-15T09:30:00Z",
};
</script>

<template>
  <SectionWrapper class="mt-23 mb-40 w-full">
    <!-- <div class="bg-[#C4C4C4] w-full min-h-96" /> -->
    <NuxtImg :src="dummy.image" class="w-full min-h-96 max-h-96 object-cover" />
    <article class="text-brand-500 mt-6">
      <!-- title,author,createdAt -->
      <div class="flex flex-col gap-3">
        <!-- title -->
        <h3 class="text-h3 font-bold">{{ dummy.title }}</h3>
        <div class="grid grid-cols-2 grid-rows-2 w-fit gap-x-56">
          <span>Written by</span>
          <span>Posted</span>
          <span>Budi</span>
          <span>20 May 2024</span>
        </div>
      </div>

      <!-- Description -->
      <p class="text-black mt-6">{{ dummy.content }}</p>
    </article>

    <!-- navigation -->
    <div class="flex justify-between mt-6 py-8">
      <div class="flex items-center gap-5">
        <div><</div>
        <div>
          <p>Previous</p>
          <p class="text-h5">Previous Title</p>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <div>
          <p>Next</p>
          <p class="text-h5">Next Title</p>
        </div>
        <div>></div>
      </div>
    </div>
  </SectionWrapper>
</template>
