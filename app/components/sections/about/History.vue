<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";

type Content = {
  year: string;
  activities: {
    title: string;
    description: string;
  }[];
};

const { lg } = useBreakpoints(breakpointsTailwind);
const lottieSize = computed(() => (lg.value ? 150 : 82));

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
    year: "2020",
    activities: [
      {
        title: "Head Office Opening",
        description:
          "Opened the Head office at Menara 165, lt.4, Jl. Let. Jend. T.B Simatupang Kav.1, TB Simatupang, Jakarta Selatan.",
      },
      {
        title: "1st Online One-On-One",
        description:
          "Launched personal coaching for one-on-one online sessions.",
      },
      {
        title: "Askrindo Corporate Training",
        description: "Conducted offline training for Askrindo.",
      },
    ],
  },
  {
    year: "2021",
    activities: [
      {
        title: "IFG Corporate Training",
        description: "Initiated online training for IFG.",
      },
    ],
  },
  {
    year: "2022",
    activities: [
      {
        title: "Politama Solo Training",
        description: "Held online corporate training for Politama Solo.",
      },
      {
        title: "Rindam Jaya",
        description: "Held offline training for Rindam Jaya.",
      },
      {
        title: "BPHN–Kemenkumham Head Office Offline Training",
        description:
          "Conducted offline training for intermediate legal counsellors at the BPHN Head office.",
      },
      {
        title: "Operation Office Open",
        description:
          "Opened the operational office at Jl.H.Khair no 59, RT.003 RW.004, Ragunan, Pasar Minggu Jakarta Selatan.",
      },
    ],
  },
  {
    year: "2023",
    activities: [
      {
        title: "+30 Coaches",
        description: "Recruited over 30 coaches.",
      },
      {
        title: "Danamon Corporate Training",
        description: "Delivered training sessions for Danamon.",
      },
      {
        title: "BPHN–Kemenkumham",
        description:
          "Delivered offline training for legal counselors representing BPHN from all over Indonesia.",
      },
    ],
  },
  {
    year: "2021 – 2024",
    activities: [
      {
        title: "Long Running Partnership",
        description: "With TechConnect!",
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
      class: 'md:gap-16 gap-25',
    }"
  >
    <div class="section-title relative">
      <div class="flex-col max-sm:flex">
        <h2
          id="historySectionTitle"
          class="inline-block text-h1 text-brand-200"
        >
          Our <em class="font-normal">Journey</em>
        </h2>
        <Lottie
          animation-link="/assets/lotties/popper.json"
          :width="lottieSize"
          :height="lottieSize"
          class="right-0 bottom-0 max-sm:absolute max-sm:translate-y-3/4"
        />
      </div>
      <p class="mt-1.5 text-h5">Get to know more about us and our milestones</p>
    </div>

    <div class="timeline table">
      <dl class="table-row" v-for="c of contents" :key="c.year">
        <dt class="table-cell pr-5">
          <time
            :datetime="c.year"
            class="block text-right text-h4 font-bold text-secondary-300"
          >
            {{ c.year }}
          </time>
        </dt>
        <dd class="table-cell">
          <div class="relative">
            <span
              class="line absolute top-0 left-0 inline-block h-full w-2 bg-primary-200"
            />
            <ul class="flex flex-col gap-8 pl-10">
              <li class="text-h6" v-for="a of c.activities" :key="a.title">
                <strong class="text-brand-200">
                  {{ a.title }}
                </strong>
                <p class="mt-2">{{ a.description }}</p>
              </li>
            </ul>
          </div>
        </dd>
      </dl>

      <dl class="table-row" key="latest">
        <dt class="table-cell pr-5">
          <time
            datetime="2024"
            class="block text-right text-h4 font-bold text-secondary-300"
          >
            2024
          </time>
        </dt>
        <dd class="table-cell">
          <div class="relative">
            <span
              class="line absolute top-0 left-0 inline-block h-full w-2 bg-primary-200"
            />
            <ul class="flex flex-col gap-8 pl-10">
              <li class="text-h6">
                <h3 class="text-[2rem]/compressed font-bold text-brand-200">
                  Achieved over
                  <span class="text-secondary-500">1,000+ hours </span> of
                  coaching
                </h3>
                <p class="mt-2">With more to come!</p>
              </li>
            </ul>
          </div>
        </dd>
      </dl>
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
