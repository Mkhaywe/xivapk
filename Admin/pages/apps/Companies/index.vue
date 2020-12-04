<style type="text/css">
.form-style-9{
	max-width: 450px;
	background: #FAFAFA;
	padding: 30px;
	margin: 50px auto;
	box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
	border-radius: 10px;
	border: 6px solid #305A72;
}
.form-style-9 ul{
	padding:0;
	margin:0;
	list-style:none;
}
.form-style-9 ul li{
	display: block;
	margin-bottom: 10px;
	min-height: 35px;
}
.form-style-9 ul li  .field-style{
	box-sizing: border-box; 
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box; 
	padding: 8px;
	outline: none;
	border: 1px solid #B0CFE0;
	-webkit-transition: all 0.30s ease-in-out;
	-moz-transition: all 0.30s ease-in-out;
	-ms-transition: all 0.30s ease-in-out;
	-o-transition: all 0.30s ease-in-out;

}.form-style-9 ul li  .field-style:focus{
	box-shadow: 0 0 5px #B0CFE0;
	border:1px solid #B0CFE0;
}
.form-style-9 ul li .field-split{
	width: 49%;
}
.form-style-9 ul li .field-full{
	width: 100%;
}
.form-style-9 ul li input.align-left{
	float:left;
}
.form-style-9 ul li input.align-right{
	float:right;
}
.form-style-9 ul li textarea{
	width: 100%;
	height: 100px;
}
.form-style-9 ul li input[type="button"], 
.form-style-9 ul li input[type="submit"] {
	-moz-box-shadow: inset 0px 1px 0px 0px #3985B1;
	-webkit-box-shadow: inset 0px 1px 0px 0px #3985B1;
	box-shadow: inset 0px 1px 0px 0px #3985B1;
	background-color: #216288;
	border: 1px solid #17445E;
	display: inline-block;
	cursor: pointer;
	color: #FFFFFF;
	padding: 8px 18px;
	text-decoration: none;
	font: 12px Arial, Helvetica, sans-serif;
}
.form-style-9 ul li input[type="button"]:hover, 
.form-style-9 ul li input[type="submit"]:hover {
	background: linear-gradient(to bottom, #2D77A2 5%, #337DA8 100%);
	background-color: #28739E;
}
</style>
<script>
import {
    companies
} from "./data";
import {
    required
} from "vuelidate/lib/validators";

/**
 * Companies component
 */
export default {
    head() {
        return {
            title: "Suppliers",
        };
    },
    data() {
        return {
            companies: companies,
            title: "Companies",
            items: [{
                    text: "Xiva Solutions ",
                    href: "/"
                },
                {
                    text: "Apps",
                    href: "/"
                },
                {
                    text: "Suppliers",
                    active: true
                }
            ],

            showmodal: false,
            submitted: false,
            company: {
                fname: "",
                lname:"",
                street: "",
                city: "",
                state: "",
                zip: "",


            }
        };
    },
    validations: {
        company: {
            name: {
                required
            },
            location: {
                required
            }
        }
    },
    methods: {
        /**
         * Modal form submit
         */
        handleSubmit(e) {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            } else {
                const name = this.company.name;
                const location = this.company.location;
                this.companies.push({
                    logo: require("~/assets/images/companies/amazon.png"),
                    name,
                    location
                });
                this.showmodal = false;
            }
            this.submitted = false;
            this.company = {};
        },

        /**
         * Modal hide on close
         */
        hideModal(e) {
            this.submitted = false;
            this.showmodal = false;
            this.company = {};
        }
    },
    middleware: 'router-auth'
};
</script>

<template>




<div>
     
    <PageHeader title="Suppliers" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-8">
                            <form class="form-inline">
                                <div class="form-group">
                                    <label class="sr-only">Search</label>
                                    <input type="search" class="form-control" placeholder="Search..." />
                                </div>
                                <div class="form-group mx-sm-3">
                                    <label for="status-select" class="mr-2">Sort By</label>
                                    <select id="status-select" class="custom-select">
                                        <option>Select</option>
                                        <option>Date</option>
                                        <option selected>Name</option>
                                        <option>Email</option>
                                        <option>Phone</option>
                                    </select>
                                </div>
                                <v-btn depressed outlined aria-dropeffect="tttt" class="primary--text">
      Submit
    </v-btn>
  
                            </form>
                        </div>
                        <div class="col-lg-4">
                            <div class="text-lg-right mt-3 mt-lg-0">
                              
                                <a class="btn text-white btn-danger" href="javascript: void(0);" @click="showmodal = true">
                                    <i class="mdi mdi-plus-circle mr-1"></i> Add New
                                </a>
                            </div>
                        </div>
                        <!-- end col-->
                    </div>
                    <!-- end row -->
                </div>
                <!-- end card-box -->
            </div>
        </div>
        <!-- end col-->
    </div>
    <div class="row">
        <div v-for="companiesdata in companies" :key="companiesdata.name" class="col-xl-4 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <div class="media">
                        <div class="avatar-md mr-3">
                            <div class="avatar-title bg-light rounded-circle">
                                <img :src="`${companiesdata.logo}`" alt="logo" class="avatar-sm rounded-circle" />
                            </div>
                        </div>
                        <div class="media-body">
                            <h4 class="my-1">
                                <a href="javascript:void(0);" class="text-dark">{{
                    companiesdata.name
                  }}</a>
                            </h4>
                            <p class="text-muted text-truncate mb-0">
                                <i class="ri-map-pin-line align-bottom mr-1"></i>
                                {{ companiesdata.location }}
                            </p>
                        </div>

                        <b-dropdown right toggle-class="text-body p-0" variant="black">
                            <template v-slot:button-content>
                                <i class="mdi mdi-dots-vertical font-20"></i>
                            </template>
                            <b-dropdown-item>Edit</b-dropdown-item>
                            <b-dropdown-item>Delete</b-dropdown-item>
                            <b-dropdown-item>Suspend</b-dropdown-item>
                        </b-dropdown>
                    </div>
                    <hr v-if="companiesdata.revenue">
                    <div class="text-muted">
                        <div class="row">
                            <div class="col-6">
                                <div>
                                    <p class="text-truncate mb-0">Purchases (CAD)</p>
                                    <h5 class="mb-sm-0">{{ companiesdata.revenue }}</h5>
                                </div>
                            </div>
                            <div class="col-6">
                                <div>
                                    <p class="text-truncate mb-0">Balance</p>
                                    <h5 class="mb-sm-0">{{ companiesdata.employees }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <b-modal id="modal-1" v-model="showmodal" title="Add Supplier" header-close-variant="light" title-class="font-18" hide-footer>
        <form @submit.prevent="handleSubmit" class="form-style-9">
           <div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="Supplier-fname">
                                                Supplier First Name
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="Supplier-fname" class="form-control" placeholder="e.g : John " />
                                        </div>
                                        
                                    </div>
                                       <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="Supplier-lname">
                                                Supplier Last Name
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="Supplier-lname" class="form-control" placeholder="e.g :  wick" />
                                        </div>
                                       </div>
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="Supplier-reference">
                                                Phone Reference
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="Supplier-reference" class="form-control" placeholder="e.g : 434" />
                                        </div>
                                          <div class="form-group mb-3">
                                            <label for="Supplier-reference">
                                                Email
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="Supplier-reference" class="form-control" placeholder="examples@xiva.com" />
                                        </div>
                                    </div>
                                </div>
             <label for="Supplier-ADDRESS">
ADDRESS
  <span class="text-danger">*</span>
</label>
  <input type="street" 
         class="form-control" 
         id="autocomplete" 
         placeholder="Street">
  
  <input type="city" 
         class="form-control" 
         id="inputCity" 
         placeholder="City">
  
  <input type="state" 
         class="form-control" 
         id="inputState" 
         placeholder="State">
  
  <input type="zip" 
         class="form-control" 
         id="inputZip" 
         placeholder="Zip">
  
  <input type="county" 
         class="form-control" 
         id="inputCounty" 
         placeholder="County">
  

</div>

            <div class="text-right">
                <button type="submit" class="btn btn-success">Save</button>
                <b-button class="ml-1" variant="danger" @click="hideModal">Cancel</b-button>
            </div>
        </form>
    </b-modal>
    <!-- Modal  -->
</div>
</template>
