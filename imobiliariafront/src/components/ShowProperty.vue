<template>
    <section class="relative overflow-auto flex-1 dark:text-[#ffffff73]">
        <div class="p-2 z-[1] bg-white sticky top-0 flex flex-row justify-between">
            <div class="flex flex-col gap-2">
                <p>{{ property.localization }}</p>
                <p>{{ property.category }}</p>
            </div>
            <div class="flex flex-col gap-2">
                <p>
                    <span class="font-semibold">{{ property.price }}</span> <span>Mzn</span>
                </p>
                <p>{{ property.purpose }}</p>
            </div>
        </div>

        <div class="z-0 relative sm:h-[calc(100%-(56+8))] images text-[#ffffff73]">
            <div class="h-full w-full">
                <v-img v-for="(image, index) in property.photos" :key="index" class="h-full w-full" cover :src="image">
                </v-img>
            </div>

            <div class="absolute left-0 flex top-0 h-full">
                <button>
                    <v-icon icon=" mdi-arrow-left-drop-circle-outline"> </v-icon>
                </button>
            </div>

            <div class="absolute right-0 flex top-0 h-full">
                <button>
                    <v-icon icon="mdi-arrow-right-drop-circle-outline"> </v-icon>
                </button>
            </div>
        </div>

        <div class="description p-3">
            <p>{{ property.title }}</p>

            <h2 class="font-bold te">Características:</h2>

            <div>
                <div class="flex flex-col gap-1">
                    <!-- renda -->
                    <p>{{ property.rentFrequency }}</p>

                    <!-- quartos -->
                    <p v-if="property.rooms > 0">
                        {{ property.rooms }}
                        <span v-if="property.rooms > 1">Quartos</span>
                        <span v-else-if="(property.rooms = 1)">Quarto</span>
                    </p>

                    <!-- casa de banho -->
                    <p v-if="property.baths > 0">
                        {{ property.baths }}
                        <span v-if="property.baths > 1">Casas de banho</span>
                        <span v-else-if="(property.baths = 0)">Casa de banho</span>
                    </p>

                    <!-- mobilia -->
                    <p>{{ property.furnishingStatus }}</p>

                    <!-- area -->
                    <p v-if="property.area > 0">{{ property.area }} m<sup>2</sup> de área</p>

                    <!-- comodidades -->
                    <p>Com: 
                        <span v-for="(amenities, index) in property.amenities" :key="index">{{ amenities }}, </span>...
                    </p>

                    <!-- descricao -->
                    <p>{{ property.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                property: {},
            };
        },
        async created() {
            try {
                const response = await axios.get(`http://localhost:9090/propriedade/${this.$route.params.id}`);
                this.property = response.data;
                console.log(this.property);
            } catch (error) {
                console.error(error);
            }
        },
    };
</script>

<style scoped></style>
