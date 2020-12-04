<script>
import {
    FormWizard,
    TabContent,
    WizardButton
} from "vue-form-wizard";
import vue2Dropzone from "vue2-dropzone";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "vue-form-wizard/dist/vue-form-wizard.min.css";

/**
 * Product-create component
 */
export default {
    head() {
        return {
            title: `${this.title} Xiva Solutions `,
        };
    },
    components: {
        FormWizard,
        TabContent,
        WizardButton,
        vueDropzone: vue2Dropzone,
        ckeditor: CKEditor.component,
    },
    data() {
        return {
            title: "Create Product",
            items: [{
                    text: "Xiva Solutions ",
                },
                {
                    text: "Product Managment",
                },
                {
                    text: "Create Product",
                    active: true,
                },
            ],
            editor: ClassicEditor,
            editorData: "<p>Content of the editor.</p>",
            dropzoneOptions: {
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: {
                    "My-Awesome-Header": "header value",
                },
                previewTemplate: this.template(),
            },
        };
    },
    methods: {
        template: function () {
            return ` <div class="dropzone-previews mt-3">
            <div class="card mt-1 mb-0 shadow-none border">
                <div class="p-2">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                        </div>
                        <div class="col pl-0">
                            <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                            <p class="mb-0" data-dz-size></p>
                        </div>
                        <div class="col-auto">
                            <!-- Button -->
                            <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                                <i class="fe-x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        },
        isLastStep() {
            if (this.$refs.wizard) {
                return this.$refs.wizard.isLastStep;
            }
            return false;
        },
    },
    middleware: "router-auth",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                   
                        

                            <div>
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="form-group mb-3">
                                            <label for="product-name">
                                                Product Name
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="product-name" class="form-control" placeholder="e.g : Apple iMac" />
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="form-group mb-3">
                                            <label for="product-reference">
                                                Product Number #
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="product-reference" class="form-control" placeholder="e.g : Apple iMac" />
                                        </div>
                                    </div>
                                </div>
                             

                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="form-group mb-1">
                                            <label for="product-summary">Product Summary</label>
                                            <textarea class="form-control" id="product-summary" rows="5" placeholder="Please enter summary"></textarea>
                                        </div>
                                    </div>
                  
                                </div>

                            

                             
                            </div>

                            <ul class="pager wizard mb-0 list-inline text-right mt-3">
                                <li class="next list-inline-item"></li>
                            </ul>
                        

                     

                  
                 
                </div>
                                <v-row
    align="center"
    justify="space-around"
  >
  <div class="col-lg-3">
      <div class="form-group mb-1">
    <v-btn>Save</v-btn>
    <v-btn color="red--text">
      Cancel
    </v-btn>
  </div>
  </div>
  </v-row>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
