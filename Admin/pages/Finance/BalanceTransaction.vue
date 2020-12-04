<template>
    <div class="float-container">
  <div class="float-child">
                                 <div >
                                            <label for="product-name">
                                                Sales Order # 
                                                <span class="text-danger">*</span> 
                                            </label>
                                            <input type="text" id="product-name" class="form-control" placeholder="#"  disabled/>
                                    
                                     
                                            <label for="CreatedOn">
                                                Created On 
                                                <span class="text-danger">*</span> 
                                            </label>
                                            <input type="date" id="CreatedOn" class="form-control" placeholder="#"  disabled/>
                                   
                                       
                                            <label for="CreatedBy">
                                                Created By 
                                                <span class="text-danger">*</span> 
                                            </label>
                                            <input type="text" id="CreatedBy" class="form-control" placeholder="#"  disabled/>
                                    
                                            <label for="Inventory-category">
                                                Inventory
                                                <span class="text-danger">*</span>
                                            </label>
                                            <select class="form-control select2" id="Inventory-category">
                                                <option>Select</option>
                                                
                                            </select>
                                       
                                  
                                        
                                            <label for="Assigned-category">
                                                Assigned To
                                                <span class="text-danger">*</span>
                                            </label>
                                            <select class="form-control select2" id="Assigned-category">
                                                <option>Select</option>
                                                
                                            </select> 
                                  <v-text-field  
                                          disabled
                                        color="red"
                                            placeholder="shipper"
                                            outlined
                                            dense >
                                        </v-text-field>
                                 </div>

  </div>
  <div class="float-child">
                      <div class>
                                         <label for="product-category">
                                                Customers
                                                <span class="text-danger">*</span>
                                            </label>
                                            <select class="form-control select2" id="product-category">
                                                <option>Select</option>
                                            </select>  
                                           

                     
                    
                                                  <v-text-field
                                                  label="City"
                                                  prepend-icon="bx bxs-city"
                                              ></v-text-field>


                                                <v-text-field
                                                solo
                                                    label="Postal"
                                                    append-icon="mdi-map-marker"
                                                ></v-text-field>

                                                <v-text-field
                                                    solo
                                                    label="Street"
                                                    prepend-icon="bx bx-street-view"
                                                ></v-text-field>

                                                <v-text-field
                                                    solo
                                                    label="State"
                                                    prepend-inner-icon="mdi-map-marker"
                                                ></v-text-field>

                                                <v-text-field
                                                    solo
                                                    label="Phone"
                                                    append-icon="bx bx-phone-outgoing"
                                                ></v-text-field>

                                                <v-text-field
                                                    solo
                                                    label="Email"
                                                ></v-text-field>
                                         
                      </div>
 
                             </div>
                             </div>
</template>