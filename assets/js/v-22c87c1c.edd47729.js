"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52041],{444898:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-22c87c1c","path":"/devices/BSIR-EZ.html","title":"Bosch BSIR-EZ control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Bosch BSIR-EZ control via MQTT","description":"Integrate your Bosch BSIR-EZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-30T19:41:12.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Alarm state (binary)","slug":"alarm-state-binary","link":"#alarm-state-binary","children":[]},{"level":3,"title":"Light delay (numeric)","slug":"light-delay-numeric","link":"#light-delay-numeric","children":[]},{"level":3,"title":"Siren delay (numeric)","slug":"siren-delay-numeric","link":"#siren-delay-numeric","children":[]},{"level":3,"title":"Siren duration (numeric)","slug":"siren-duration-numeric","link":"#siren-duration-numeric","children":[]},{"level":3,"title":"Light duration (numeric)","slug":"light-duration-numeric","link":"#light-duration-numeric","children":[]},{"level":3,"title":"Siren volume (enum)","slug":"siren-volume-enum","link":"#siren-volume-enum","children":[]},{"level":3,"title":"Siren and light (enum)","slug":"siren-and-light-enum","link":"#siren-and-light-enum","children":[]},{"level":3,"title":"Power source (enum)","slug":"power-source-enum","link":"#power-source-enum","children":[]},{"level":3,"title":"Warning (composite)","slug":"warning-composite","link":"#warning-composite","children":[]},{"level":3,"title":"Test (binary)","slug":"test-binary","link":"#test-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Ac status (binary)","slug":"ac-status-binary","link":"#ac-status-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1705737457000},"filePathRelative":"devices/BSIR-EZ.md"}')},259174:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var a=o(166252);const i=(0,a._)("h1",{id:"bosch-bsir-ez",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#bosch-bsir-ez","aria-hidden":"true"},"#"),(0,a.Uk)(" Bosch BSIR-EZ")],-1),d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"BSIR-EZ")],-1),l=(0,a._)("td",null,"Vendor",-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Outdoor siren")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"alarm_state, light_delay, siren_delay, siren_duration, light_duration, siren_volume, siren_and_light, power_source, warning, test, tamper, battery, voltage, battery_low, ac_status, linkquality")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BSIR-EZ.jpg",alt:"Bosch BSIR-EZ"})])],-1),u=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),h=(0,a._)("p",null,'You will need to add the install code from the back of the unit in order to pair the siren. If you do not complete this step the interview will fail and the unit will be shown as unsupported. On the back of the siren is a QR code and a 36 digit code that is called "Install code" - do NOT use this 36 digit code. Instead, scan the QR code with your phone and this will return a 91 long code. Use this code by going to Z2M GUI, Settings, Tools, "Add Install Code".',-1),p=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="alarm-state-binary" tabindex="-1"><a class="header-anchor" href="#alarm-state-binary" aria-hidden="true">#</a> Alarm state (binary)</h3><p>Alarm turn ON/OFF. Value can be found in the published state on the <code>alarm_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_state&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> alarm state is ON, if <code>OFF</code> OFF.</p><h3 id="light-delay-numeric" tabindex="-1"><a class="header-anchor" href="#light-delay-numeric" aria-hidden="true">#</a> Light delay (numeric)</h3><p>Flashing light delay. Value can be found in the published state on the <code>light_delay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;light_delay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>30</code>. The unit of this value is <code>s</code>.</p><h3 id="siren-delay-numeric" tabindex="-1"><a class="header-anchor" href="#siren-delay-numeric" aria-hidden="true">#</a> Siren delay (numeric)</h3><p>Siren alarm delay. Value can be found in the published state on the <code>siren_delay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;siren_delay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;siren_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>30</code>. The unit of this value is <code>s</code>.</p><h3 id="siren-duration-numeric" tabindex="-1"><a class="header-anchor" href="#siren-duration-numeric" aria-hidden="true">#</a> Siren duration (numeric)</h3><p>Duration of the alarm siren. Value can be found in the published state on the <code>siren_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;siren_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;siren_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>15</code>. The unit of this value is <code>m</code>.</p><h3 id="light-duration-numeric" tabindex="-1"><a class="header-anchor" href="#light-duration-numeric" aria-hidden="true">#</a> Light duration (numeric)</h3><p>Duration of the alarm light. Value can be found in the published state on the <code>light_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;light_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>15</code>. The unit of this value is <code>m</code>.</p><h3 id="siren-volume-enum" tabindex="-1"><a class="header-anchor" href="#siren-volume-enum" aria-hidden="true">#</a> Siren volume (enum)</h3><p>Volume of the alarm. Value can be found in the published state on the <code>siren_volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;siren_volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;siren_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="siren-and-light-enum" tabindex="-1"><a class="header-anchor" href="#siren-and-light-enum" aria-hidden="true">#</a> Siren and light (enum)</h3><p>Siren and Light behaviour during alarm . Value can be found in the published state on the <code>siren_and_light</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;siren_and_light&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;siren_and_light&quot;: NEW_VALUE}</code>. The possible values are: <code>only_light</code>, <code>only_siren</code>, <code>siren_and_light</code>.</p><h3 id="power-source-enum" tabindex="-1"><a class="header-anchor" href="#power-source-enum" aria-hidden="true">#</a> Power source (enum)</h3><p>Siren power source. Value can be found in the published state on the <code>power_source</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_source&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_source&quot;: NEW_VALUE}</code>. The possible values are: <code>solar_panel</code>, <code>ac_power_supply</code>, <code>dc_power_supply</code>.</p><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite" aria-hidden="true">#</a> Warning (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect) allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li></ul><h3 id="test-binary" tabindex="-1"><a class="header-anchor" href="#test-binary" aria-hidden="true">#</a> Test (binary)</h3><p>Indicates whether the device is being tested. Value can be found in the published state on the <code>test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> test is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="ac-status-binary" tabindex="-1"><a class="header-anchor" href="#ac-status-binary" aria-hidden="true">#</a> Ac status (binary)</h3><p>Is the device plugged in. Value can be found in the published state on the <code>ac_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> ac status is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',34),m={},g=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),i,(0,a._)("table",null,[d,(0,a._)("tbody",null,[n,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(o,{to:"/supported-devices/#v=Bosch"},{default:(0,a.w5)((()=>[(0,a.Uk)("Bosch")])),_:1})])]),r,c,s])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,(0,a.kq)(" Notes END: Do not edit below this line "),p])}]])}}]);