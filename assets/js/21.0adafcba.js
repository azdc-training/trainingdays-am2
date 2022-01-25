(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{489:function(t,e,a){t.exports=a.p+"assets/img/finalArchitecture.46a7e675.png"},490:function(t,e,a){t.exports=a.p+"assets/img/startingpoint01.c5ea4369.png"},491:function(t,e,a){t.exports=a.p+"assets/img/deploytoazure.e0e5d477.png"},492:function(t,e,a){t.exports=a.p+"assets/img/startingpoint02.52c69db3.png"},493:function(t,e,a){t.exports=a.p+"assets/img/lbconfig01.4d6699a0.png"},494:function(t,e,a){t.exports=a.p+"assets/img/lbconfig02.9d3bdae5.png"},495:function(t,e,a){t.exports=a.p+"assets/img/lbconfig03.f76302ff.png"},496:function(t,e,a){t.exports=a.p+"assets/img/lbresult1.7db2edf5.png"},497:function(t,e,a){t.exports=a.p+"assets/img/lbresult2.4be32af5.png"},873:function(t,e,a){"use strict";a.r(e);var r=a(35),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"challenge-10-networking-load-balancing-your-www-server-farm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#challenge-10-networking-load-balancing-your-www-server-farm"}},[t._v("#")]),t._v(" Challenge 10: Networking - Load balancing your WWW Server Farm")]),t._v(" "),r("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[t._v("#")]),t._v(" Here is what you will learn 🎯")]),t._v(" "),r("ul",[r("li",[t._v("How to load balance http traffic to 2 webserver VMs")]),t._v(" "),r("li",[t._v("Create an external load balancer using the Azure portal")]),t._v(" "),r("li",[t._v("Learn to know the requirements for an Azure external load balancer and how to configure it.")])]),t._v(" "),r("p",[t._v("Our final architecture should look like this:\n"),r("img",{attrs:{src:a(489),alt:"Final architecture"}})]),t._v(" "),r("p",[t._v("At first you will deploy the "),r("em",[t._v("start environment")]),t._v(" and then you will add the external "),r("em",[t._v("load balancer")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"table-of-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#deploy-the-starting-point"}},[t._v("Deploy the Starting Point")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#deploy-the-load-balancer"}},[t._v("Deploy the Load Balancer")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#test-server-outage-optional"}},[t._v("Test server outage (optional)")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#cleanup"}},[t._v("Cleanup")])])]),t._v(" "),r("h2",{attrs:{id:"deploy-the-starting-point"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-starting-point"}},[t._v("#")]),t._v(" Deploy the Starting Point")]),t._v(" "),r("p",[t._v("In this directory there is an ARM-template which includes 2 web server VMs and its requirements (networking, disks,...):")]),t._v(" "),r("p",[r("img",{attrs:{src:a(490),alt:"'Starting Point' Architecture"}})]),t._v(" "),r("p",[t._v("Deploy this scenario into your subscription by "),r("strong",[t._v("clicking")]),t._v(" on the "),r("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fazuredevcollege%2Ftrainingdays%2Fmaster%2Fday1%2Fchallenge-10%2Fchallengestart%2Fchallengestart.json"}},[r("img",{attrs:{src:a(491)}})]),t._v("\nbutton.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Value")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("em",[t._v("Resource group")])]),t._v(" "),r("td",[r("strong",[t._v("(new)")]),t._v(" rg-lbwww")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Location")])]),t._v(" "),r("td",[t._v("West Europe")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Admin user")])]),t._v(" "),r("td",[t._v("demouser")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Admin password")])]),t._v(" "),r("td",[t._v("%some complex value%")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Vm Size")])]),t._v(" "),r("td",[t._v("Standard_B2s  or try e.g. Standard_F2s_v2")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Disk Sku")])]),t._v(" "),r("td",[t._v("StandardSSD_LRS")])])])]),t._v(" "),r("p",[t._v("The result should look similar to this:")]),t._v(" "),r("p",[r("img",{attrs:{src:a(492),alt:"Deployment result"}})]),t._v(" "),r("h2",{attrs:{id:"deploy-the-load-balancer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-load-balancer"}},[t._v("#")]),t._v(" Deploy the Load Balancer")]),t._v(" "),r("p",[t._v("Now let's add an external Azure load balancer in front of the two parallel web server machines.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[Azure Portal] \n-> '+' Add \n-> Search the marketplace for 'Load balancer'\n")])])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Value")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("em",[t._v("Resource group")])]),t._v(" "),r("td",[t._v("rg-lbwww")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Name")])]),t._v(" "),r("td",[t._v("lb-wwwfarm")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Region")])]),t._v(" "),r("td",[t._v("West Europe")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Type")])]),t._v(" "),r("td",[t._v("Public")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("SKU")])]),t._v(" "),r("td",[t._v("Basic")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Public IP address")])]),t._v(" "),r("td",[t._v("%Use existing%")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Choose public IP address")])]),t._v(" "),r("td",[t._v("pip-wwwfarm")])])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("📝To get your load balancer working you need to configure the following:")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("A "),r("em",[t._v("backend pool")]),t._v(" that contains the endpoints i.e. the VMs to which the traffic will be routed.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(493),alt:"backend pool"}})])]),t._v(" "),r("li",[r("p",[t._v("A "),r("em",[t._v("health probe")]),t._v(" for TCP port 80 (http) to check if the endpoints are 'responsive' to web requests")]),t._v(" "),r("p",[r("img",{attrs:{src:a(494),alt:"health probe"}})])]),t._v(" "),r("li",[r("p",[t._v("A "),r("em",[t._v("lb rule")]),t._v(" to forward incoming traffic (TCP port 80) on lb's frontend IP address to backend pool (TCP port 80)")]),t._v(" "),r("p",[r("img",{attrs:{src:a(495),alt:"lb rule"}})])])])]),t._v(" "),r("p",[t._v("To check if your lb is working do a HTTP request to the endpoint "),r("code",[t._v("http://%PIP of your lb%")]),t._v(". Depending which endpoint serves your request the result should look like:")]),t._v(" "),r("p",[r("img",{attrs:{src:a(496),alt:"lbresult1"}})]),t._v(" "),r("p",[r("img",{attrs:{src:a(497),alt:"lbresult2"}})]),t._v(" "),r("h2",{attrs:{id:"test-server-outage-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test-server-outage-optional"}},[t._v("#")]),t._v(" Test server outage (optional)")]),t._v(" "),r("ol",[r("li",[t._v("Stop one VM and verify if the webpage is still served.")]),t._v(" "),r("li",[t._v("Restart the VM and check if the lb notices it and re-balances load.")])]),t._v(" "),r("h2",{attrs:{id:"cleanup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[t._v("#")]),t._v(" Cleanup")]),t._v(" "),r("p",[t._v("Delete the resource group "),r("code",[t._v("rg-lbwww")]),t._v(".")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/day1/challenge-09/"}},[t._v("◀ Previous challenge")]),t._v(" | "),r("RouterLink",{attrs:{to:"/day1/"}},[t._v("🔼 Day 1")]),t._v(" | "),r("RouterLink",{attrs:{to:"/day1/challenge-11/"}},[t._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);