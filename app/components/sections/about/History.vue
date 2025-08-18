<script setup lang="ts">
type Content = {
  year: string;
  activities: {
    title: string;
    description: string;
  }[];
};

useGSAP(
  (gsap) => {
    const lines = Array.from(document.querySelectorAll(".line")),
      rows = Array.from(document.querySelectorAll(".timeline .table-row"));

    gsap.from(".section-title h2", {
      scaleY: 0.1,
      ease: "elastic.out",
      opacity: 0,
      y: "50%",
      duration: 1.7,
      scrollTrigger: {
        trigger: ".section-title",
        start: "top bottom",
      },
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline",
        start: "top bottom",
      },
    });

    lines.forEach((line, i) => {
      const row = rows[i],
        duration = 0.55;

      if (!row) return;

      tl = tl
        .from(line, {
          duration,
          height: 0,
        })
        .from(
          row,
          {
            opacity: 0,
            duration,
            ease: "linear",
          },
          "<",
        );
    });
  },
  {
    scope: "#historySection",
  },
);

const contents: Content[] = [
  {
    year: "2005 - 2015",
    activities: [
      {
        title: "Major Partnership",
        description: "Partnered with a leading tech company.",
      },
      {
        title: "New Product Line",
        description: "Introduced a new range of consumer devices.",
      },
    ],
  },
  {
    year: "2014",
    activities: [
      { title: "IPO", description: "Went public on the stock exchange." },
      {
        title: "Cloud Platform Launch",
        description: "Rolled out our cloud services platform.",
      },
    ],
  },
  {
    year: "2015 - 2019",
    activities: [
      { title: "Acquisition", description: "Acquired a major competitor." },
      {
        title: "AI Research Lab",
        description:
          "Opened a dedicated artificial intelligence research facility.",
      },
    ],
  },
  {
    year: "2020 - 2022",
    activities: [
      {
        title: "Remote Work Transition",
        description: "Moved the company to fully remote operations.",
      },
      {
        title: "Record Revenue",
        description: "Achieved the highest annual revenue in company history.",
      },
    ],
  },
  {
    year: "2023",
    activities: [
      {
        title: "Sustainability Initiative",
        description: "Launched a global sustainability program.",
      },
    ],
  },
];
</script>

<template>
  <SectionWrapper
    id="historySection"
    aria-label="Company History"
    :inner-container-props="{
      class: 'gap-16',
    }"
  >
    <div class="section-title">
      <h2
        id="historySectionTitle"
        class="line-tight text-title font-bold text-brand-100"
      >
        Our <em class="font-normal">Journey</em> 🎉
      </h2>
      <p class="line-tight mt-1.5 text-2xl">
        Get to know more about us and our milestones
      </p>
    </div>

    <div class="timeline table">
      <div class="table-row" v-for="c of contents" :key="c.year">
        <div class="table-cell pr-5">
          <p
            class="text-right text-3xl leading-tight font-bold text-secondary-200"
          >
            {{ c.year }}
          </p>
        </div>
        <div class="table-cell">
          <div class="relative flex flex-col gap-8 pl-10">
            <span
              class="line absolute top-0 left-0 inline-block h-full w-2 bg-primary-100"
            />
            <div
              class="text-xl leading-tight"
              v-for="a of c.activities"
              :key="a.title"
            >
              <strong class="text-brand-100">
                {{ a.title }}
              </strong>
              <p class="mt-2">{{ a.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.timeline .table-cell {
  @apply align-top;
}

.timeline .table-row:not(:last-child) .table-cell {
  @apply pb-10;
}
</style>
