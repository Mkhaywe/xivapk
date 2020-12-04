<style type="text/css">
.form-style-9{
	width: 550px;
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
  

}


  .form-style-9 ul li  .field-style:focus{
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
 .form-style-19  v-card[type="text"],
.form-style-9 ul li input[type="submit"] {
	-moz-box-shadow: inset 0px 1px 0px 0px #3985B1;
	-webkit-box-shadow: inset 0px 1px 0px 0px #3985B1;
	box-shadow: inset 0px 1px 0px 0px #3985B1;
	background-color: #51c02f;
	border: 1px solid #17445E;
	display: inline-block;
	cursor: pointer;
	color: violet;
	padding: 8px 18px;
	text-decoration: none;
	font: 12px Arial, Helvetica, sans-serif;
}
.form-style-9 ul li input[type="button"]:hover, 
.form-style-9 ul li input[type="submit"]:hover {
	background: linear-gradient(to bottom, #2D77A2 5%, #337DA8 100%);
	background-color: #28739E;
}
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}

#block_container
{
    text-align:center;
}
#bloc1, #bloc2, #bloc3
{
    display:inline;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
  
}
  .custom-placeholer-color input::placeholder {
  color: red!important;
  opacity: 1;
}
.blue-1 {
    background-color: navy;
}
.custom-label-color .v-label {
  color:navy;
  opacity: 1;
}

.custom-placeholer-color input,
.custom-label-color input{
  color: red!important;
}
</style>
<script>
import { VueDraggableDirective } from 'vue-draggable'
import Vuetify from 'vuetify'
import avatarsVue from '../ui/avatars.vue'
import colors from 'vuetify/es5/util/colors'
  export default {
    data () {
      return {
        tab: null,
        items: [
          { tab: 'Financials', content:"Company"},
          { tab: 'User Profile', content: 'User Profile' },
          { tab: 'Invoicing', content: 'Invoice Template' },
          { tab: 'Dashboard', content: 'Personal Dashboard' },
          { tab: 'Admin', content: 'Admin Panel' },
          { tab: 'Currency', content: 'Currency' },
        ],

      content: {

      }

      }
    },
  }
</script>
<template>
<div class="card">
  
<v-card class="card">
    <v-tabs
      v-model="tab"
      background-color="primary"
      dark
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" show-arrows leave-absolute vertical>
      <v-tab-item 
      show-arrows
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat leave-absolute>
            <div class="form-style-3">
          <v-card-text>{{ item.content }}</v-card-text>
          <div v-if="item.content==='Company'">
           <ul class="form-style-19">
              <label>Company Name </label>
<v-text-field  outlined dense filled  color="orange" class="custom-placeholer-color" placeholder="Xiva"> 
</v-text-field>

  <label>Company Logo </label>
<v-text-field  outlined dense filled  color="orange" class="custom-placeholer-color" aria-placeholder="custom-placeholer-color"> 
</v-text-field>


  <label>Company address </label>
<v-text-field  outlined dense filled  color="orange" class="custom-placeholer-color" aria-placeholder="custom-placeholer-color"> 
</v-text-field>

  <label>Company Number </label>
<v-text-field  outlined dense filled  color="orange" class="custom-placeholer-color" aria-placeholder="custom-placeholer-color"> 
</v-text-field>
           </ul>
          
          </div>
            </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
</v-card>
</div>






</template>
