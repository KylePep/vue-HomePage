<script setup>
import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm";
import { loadConfettiPreset } from "https://cdn.jsdelivr.net/npm/@tsparticles/preset-confetti@3.0.2/+esm";
import { computed, onUnmounted, watch } from "vue";

const props = defineProps(['celebration'])
const celebration = computed(() => props.celebration)

let particlesInstance = null;

async function loadParticles(options) {
  await loadConfettiPreset(tsParticles);

  particlesInstance = await tsParticles.load({ id: "tsparticles", options });
}

function destroyParticles() {
  if (particlesInstance) {
    particlesInstance.destroy();
    particlesInstance = null;
  }
}

const configs = {
  fpsLimit: 60,
  // detectRetina: true,
  fullScreen: {
    enable: true
  },
  // background: {
  //   color: "#000"
  // },
  preset: "confetti",
  particles: {
    color: {
      value: ["#ffffff", "#17a2b8", "#dc5f00"]
    },
    shape: {
      type: ["circle", "square"]
    },
    opacity: {
      value: { min: 0, max: 1 },
      animation: {
        enable: true,
        speed: 2,
        startValue: "max",
        destroy: "min"
      }
    },
    size: {
      value: { min: 3, max: 7 }
    },
    life: {
      duration: {
        sync: true,
        value: 5
      },
      count: 1
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: 20
      },
      speed: 80,
      decay: 0.1,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "destroy",
        top: "none"
      }
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 60
      }
    },
    tilt: {
      direction: "random",
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 60
      }
    },
    roll: {
      darken: {
        enable: true,
        value: 25
      },
      enable: true,
      speed: {
        min: 15,
        max: 25
      }
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15
      }
    }
  },
  emitters: [
    {
      direction: "top-right",
      rate: {
        delay: 0.1,
        quantity: 3
      },
      position: {
        x: 0,
        y: 100
      },
      size: {
        width: 0,
        height: 0
      },
      particles: {
        move: {
          angle: {
            offset: -15,
            value: 60
          }
        }
      }
    },
    {
      direction: "top-left",
      rate: {
        delay: 0.1,
        quantity: 5
      },
      position: {
        x: 100,
        y: 100
      },
      size: {
        width: 0,
        height: 0
      },
      particles: {
        move: {
          angle: {
            offset: 15,
            value: 60
          }
        }
      }
    }
  ]
};

watch(celebration, () => {

  if (celebration.value == 'celebrate') {
    loadParticles(configs);
  } else {
    destroyParticles()
  }
})

onUnmounted(() => { destroyParticles() })


</script>


<template>
  <div class="d-none">Celebration!</div>
</template>


<style lang="scss" scoped></style>