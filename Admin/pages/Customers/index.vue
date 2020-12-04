<script>
import Vuetify from 'vuetify'
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Customer Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Phone', value: 'Phone' },
        { text: 'EMail', value: 'Email' },
        { text: 'Address', value: 'Address' },
        { text: 'Balance', value: 'Balance' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      
            showmodal: false,
            submitted: false,
            Customer: {
                fname: "",
                lname:"",
                street: "",
                city: "",
                state: "",
                zip: "",


            }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
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
                const name = this.Customer.name;
                const location = this.Customer.location;
                this.companies.push({
                
                    name,
                    location
                });
                this.showmodal = false;
            }
            this.submitted = false;
            this.Customer = {};
        },

        /**
         * Modal hide on close
         */
        hideModal(e) {
            this.submitted = false;
            this.showmodal = false;
            this.Customer = {};
        }},
    

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            Phone: '488-996-999',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
          
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
    
  }
</script>
<template>
<div>
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
                                        <option>Email</option>
                                        <option selected>Name</option>
                                        <option>Phone</option>
                                     
                                    </select>
                                </div>
                                
                              <v-row
    align="center"
    justify="space-around"
  >
    <v-btn depressed outlined aria-dropeffect="tttt" class="primary--text">
      Submit
    </v-btn>
  
 
  </v-row>
                         <div class="col-lg-4">
                            <div class="text-lg-right mt-3 mt-lg-0">
                              
                                <a class="btn text-white btn-danger" href="javascript: void(0);" @click="showmodal = true">
                                    <i class="mdi mdi-plus-circle mr-1"></i> Add New Customers
                                </a>
                            </div>
                        </div>      </form>
                            
                        </div>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
    :showmodal="showmodal"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Customers List</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
        
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Customer name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Phone"
                      label="Phone"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.EMail"
                      label="EMail"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.address"
                      label="address"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Balance"
                      label="Balance"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="showmodal"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  
                         <b-modal id="modal-1" v-model="showmodal" title="Add Customer" header-close-variant="light" title-class="font-18" hide-footer>
        <form @submit.prevent="handleSubmit" class="form-style-9">
           <div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="Customer-fname">
                                                Customer First Name
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="Customer-fname" class="form-control" placeholder="e.g : John " />
                                        </div>
                                        
                                    </div>
                                       <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="Customer-lname">
                                                Customer Last Name
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="Customer-lname" class="form-control" placeholder="e.g :  wick" />
                                        </div>
                                       </div>
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="Customer-reference">
                                                Phone Reference
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="Customer-reference" class="form-control" placeholder="e.g : 434" />
                                        </div>
                                          <div class="form-group mb-3">
                                            <label for="Customer-reference">
                                                Email
                                                <span class="text-danger">*</span>
                                            </label>
                                            <input type="text" id="Customer-reference" class="form-control" placeholder="examples@xiva.com" />
                                        </div>
                                    </div>
                                </div>
             <label for="Customer-ADDRESS">
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
</div>
</template>
