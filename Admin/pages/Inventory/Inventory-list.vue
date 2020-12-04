<script>
export default {

    data() {
        return {
           headers: [
          {
            text: 'Pallet Number',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Pallet #', value: 'Pallet #' },
          { text: 'Product', value: 'Product' },
          { text: 'Case Size', value: 'Case Size' },
          { text: 'Size Unit', value: 'Size Unit' },
          { text: 'Cases #', value: 'Cases #' },
           { text: 'Cases Available #', value: 'Cases Available #' },
           { text: ' Extra Cost per Cases #', value: 'Extra Cost per Cases #' },
           { text: 'Package Type ', value: 'Package Type' },
           { text: 'Calculated Price', value: 'Calculated Price' },
           { text: 'Calculated full Price', value: 'Calculated full Price' },
        ],
       
   

             desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          
        ],
     
              myStyle:{
            backgroundColor:"grey" 
            },
            el: '#Pallet',
             dialog: false,
             dialog2: false,
             dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,

    };
    }}
    
</script>

<template>
   <div class="col-lg-12">
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
                            </form>
 <span class="border border-info"></span>
      
         <div class="dz-message needsclick">
                                
                                     <v-data-table
                                        :headers="headers"
                                    
                                        :items="desserts"
                                             :columns="columns"
                                                striped
                                                bordered
                                            
                                                class="text-center"
                                            
                                                responsive
       
                                          >
                                      </v-data-table>
                               
                                </div>
                                  
</div>
</template>