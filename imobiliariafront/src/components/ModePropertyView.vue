<template >
    <div class="h-full w-full flex flex-col overflow-auto sm:overflow-hidden sm:flex-row gap-3 p-3">
        <div class="h-max mx-auto w-full max-w-[450px] flex-col gap-1">
            <PropertyComp
                :photo="property.photos"
                :title="property.title"
                :price="property.price"
                :localization="property.localization"
                :category="property.category"
                :rooms="property.rooms"
                :baths="property.baths"
                :area="property.area"
                :purpose="property.purpose"
                :frontImage="property.front"
                :productLabel="property.purpose" class="flex-1"
                />
                <div>
                    <pre>{{ property.description }}</pre>
                </div>
        </div>

        <div class="flex-1 sm:overflow-auto">
            <form>
                
                <v-text-field 
                    label="Título"
                    v-model="property.title"
                    type="text"
                    clearable>
                </v-text-field>

                <v-text-field
                        label="Localização"
                        v-model="property.localization"
                        clearable>
                </v-text-field>

                <div class="flex flex-wrap">
                    
                    <v-select
                    class="inline-blockd"
                    item-title="Ativo"
                        label="Estado"
                        v-model="property.state"
                        :items="['Ativo', 'Desativo']"
                        clearable>
                    </v-select>

                    <v-select
                    class="inline-blockd"
                        label="Propósito"
                        v-model="property.purpose"
                        :items="['Venda', 'Alugável', 'Venda e Aluguer']"
                        clearable>
                    </v-select>

                   

                    <v-select
                    class="inline-blockd"
                        label="Etiqueta"
                        v-model="property.productLabel"
                        :items="['Novo', 'Destaque', 'Promoçao']"
                        clearable>
                    </v-select>
                    <v-select
                        class="inline-blockd"
                        label="Forma de pagamento"
                        v-model="property.rentFrequency"
                        :items="['Semanal', 'Mensal', 'Trimestral', ' Anual']"
                        clearable>
                    </v-select>
                    <v-select
                        class="inline-blockd"
                        label="Categoria"
                        v-model="property.category"
                        :items="['Residencial', 'Comercial', 'Industrial', 'Terreno', 'Lazer']"
                        clearable>
                    </v-select>
                </div>

                <v-textarea 
                    label="Descrição" 
                    v-model="property.description">
                </v-textarea>

                <div class="flex flex-wrap">
                    <v-text-field
                    class="number"
                        label="Preço"
                        v-model="property.price"
                        solo
                        type="number"
                        clearable>
                    </v-text-field>
                    <v-text-field
                        class="number"
                        label="Quartos"
                        type="number"
                        v-model="property.rooms"
                        clearable>
                </v-text-field>
                    <v-text-field
                        class="number"
                        label="Banheiros"
                        type="number"
                        v-model="property.baths"
                        clearable>
                    </v-text-field>
                    <v-text-field
                        class="number"
                        label="Área"
                        v-model="property.area"
                        solo
                        type="number"
                        clearable>
                    </v-text-field>
                </div>
                <div class="flex flex-wrap">
                    <v-select
                        class="inline-blockd"
                        label="Comodidades"
                        v-model="property.amenities"
                        multiple
                        :items="['Piscina', 'Academia', 'Estacionamento', 'Segurança', 'Área de lazer', 'Terraço', 'Ar-Condicionado', 'Mobília', 'Cozinha equipada']"
                        clearable>
                    </v-select>

                    <v-select
                        class="inline-blockd"
                        label="Mobília"
                        v-model="property.furnishingStatus"
                        :items="['Mobilada', 'Alguma Mobília', 'Sem Mobília', 'Mobília Negociável']"
                        clearable>
                    </v-select>
                </div>

                <v-file-input 
             
                    chips 
                    accept="image/*" 
                    v-model="property.photos" 
                    counter 
                    multiple 
                    clearable 
                    label="Selecione as imagens" 
                    prepend-icon="mdi-camera">
                </v-file-input>


            </form>
        </div>
    </div>
</template>
<script>
    import PropertyComp from "./partials/PropertyComp.vue";
    export default {
        components: {
            PropertyComp,
        },
        data() {
            return {
                property: {
                    title: "",
                    title_en: "",
                    state: "Ativo",
                    purpose: "",
                    price: 0,
                    productLabel: "",
                    rentFrequency: "",
                    description: "",
                    description_en: "",
                    slug: "",
                    slug_en: "",
                    category: "",
                    rooms: 0,
                    baths: 0,
                    area: 0,
                    photoCount: 0,
                    photos: [],
                    amenities: [],
                    furnishingStatus: "",
                    localization: "",
                },
            };
        },
       
    };
</script>
<style scoped>
.inline-blockd{
    display: inline-block;
    min-width: 100px;
    flex: 1 1 0%;
}
.number{
    display: inline-block;
    min-width: 50px;
    flex: 1 1 0%;
}

</style>

<!-- ////////////////////////////////////////////////////// -->

<!-- <template>
  <div>
    <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"> </div>
 
    <input ref="fileInput" type="file" @input="pickFile">
  </div>
</template>
 
<script>
export default {
  data() {
      return {
        previewImage: null
      };
    },
  methods: {
      selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      }
  }
}
</script>
 
<style>
.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
</style> -->


