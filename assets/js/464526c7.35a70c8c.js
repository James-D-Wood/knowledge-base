"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="Development Notebook",l={unversionedId:"personal-site/notebook",id:"personal-site/notebook",title:"Development Notebook",description:"December 13, 2021",source:"@site/docs/personal-site/notebook.md",sourceDirName:"personal-site",slug:"/personal-site/notebook",permalink:"/docs/personal-site/notebook",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Value Sort",permalink:"/docs/personal-site/features/value_sort"},next:{title:"Recipe App",permalink:"/docs/category/recipe-app"}},s={},p=[{value:"December 13, 2021",id:"december-13-2021",level:2},{value:"Setting up the Site",id:"setting-up-the-site",level:3},{value:"System Outline",id:"system-outline",level:3},{value:"Beginning State",id:"beginning-state",level:4},{value:"End State",id:"end-state",level:4},{value:"Front End (React Client)",id:"front-end-react-client",level:3},{value:"Backend (Go Server)",id:"backend-go-server",level:3},{value:"Installing Postgres",id:"installing-postgres",level:3},{value:"References:",id:"references",level:5},{value:"Configuring App for Env",id:"configuring-app-for-env",level:3},{value:"Configuring Apache for ReverseProxy",id:"configuring-apache-for-reverseproxy",level:3},{value:"References:",id:"references-1",level:5},{value:"Setting Up Go Server as a Systemd Service",id:"setting-up-go-server-as-a-systemd-service",level:3},{value:"References:",id:"references-2",level:5},{value:"Reflection",id:"reflection",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development-notebook"},"Development Notebook"),(0,o.kt)("h2",{id:"december-13-2021"},"December 13, 2021"),(0,o.kt)("h3",{id:"setting-up-the-site"},"Setting up the Site"),(0,o.kt)("p",null,"About a year ago I decided it was time to get my name out there for mostly me, my parents, and anyone clicking through my resume to see. This would involve publishing a personal website that would allow me to showcase myself as a developer through a simple blog and links to side projects. I could pretty simply be accomplished by a static site generator, a nice template and a monthly subscription to a managed hosting service - but what fun would that be? So I decided to set out some constraints for myself. This project needed to meet the following constraints:"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Give me more experience with technologies I've been interested in (Go, React, TypeScript, Tailwind, Docker)"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'Explore "microservice" architecture (yet to be achieved in deployment)'),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Dip my toes in AWS"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","All for around $5 per month")),(0,o.kt)("p",null,"So like any good developer I bought a domain name, rented an EC2 instance, got the front end running and then proceeded to domain squat for 6 months. I'm finally getting around to launching the back end for this site and I'm finding that my lack of a CICD pipeline or even documentation is biting me in the behind. The following retraces my steps so that I can look back on this and hopefully learn, and so that others may possibly get a laugh."),(0,o.kt)("h3",{id:"system-outline"},"System Outline"),(0,o.kt)("p",null,"To help with visualizing the walkthrough here is a basic diagram of the app at the beginning and at end of this article.During this walkthrough I will update the React client to no longer use hash routing, add a backend service run by systemd to serve as my API, install a PostgreSQL database and configure traffic through the Apache server I am already running."),(0,o.kt)("h4",{id:"beginning-state"},"Beginning State"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"                                AWS EC2 Instance\n     ---------------------------------------------\n    |                                              |\n    |                               Front End      |\n    |                  Serve       ------------    |\n    |                 index.html  |            |   |\n    |               ------------\x3e |  React App |   |\n    |  www.*       |              |            |   |\n    |              |               ------------    |\n    |         ------------                         |\n    |        |            |                        |\n----|-------\x3e|   Apache   |                        |\n    |        |            |                        |\n    |         ------------                         |\n    |                                              |\n     ----------------------------------------------\n\n")),(0,o.kt)("h4",{id:"end-state"},"End State"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"                                AWS EC2 Instance\n     ------------------------------------------------------------------------\n    |                                                                        |\n    |                               Front End                                |\n    |                  Serve       ------------                              |\n    |                 index.html  |            |                             |\n    |               ------------\x3e |  React App |                             |\n    |  www.*       |              |            |                             |\n    |              |               ------------                              |\n    |         ------------                                                   |\n    |        |            |                                                  |\n----|-------\x3e|   Apache   |           systemd service                        |\n    |        |            |       ---------------------                      |\n    |         ------------       |    Back End         |      Database       |\n    |              |             |     ------------    |    ------------     |\n    |  api.*       |             |    |            |   |   |            |    |\n    |               ------------\x3e|    | Golang API |<-----\x3e| PostgreSQL |    |\n    |                 Reverse    |    |            |   |   |            |    |\n    |                  Proxy     |     ------------    |    ------------     |\n    |                 to :8080   |                     |                     |\n    |                             ---------------------                      |\n    |                                                                        |\n     ------------------------------------------------------------------------\n\n")),(0,o.kt)("h3",{id:"front-end-react-client"},"Front End (React Client)"),(0,o.kt)("p",null,"I store the code for my front end publically on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/James-D-Wood/personal-site-react-ui"},"GitHub")," if you are interested in viewing it! This client app acts as a mostly static site and hosts my resume, links to public projects, and developer notebook. The Dev Notebook portion requires connection to my backend which I will discuss next. If you are reading this article, spoiler alert: I was successful in deploying it."),(0,o.kt)("p",null,"Once my PR has been merged into ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),", I'm ready to deploy my code. Currently, I have a single EC2 instance that hosts my front end so deploying is a matter of SSH'ing into the box and manually pulling, building and running the code - I hope."),(0,o.kt)("p",null,"In the future I would like to update my process to allow myself to spin up a Docker container that does the majority of this for me and point my Apache server at that contatiner."),(0,o.kt)("p",null,"For now, the steps are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh myEC2Instance   # login data omitted for obvious reasons\ncd ~/personal-site-react-ui\ngit pull            # pull latest code from GitHub\nnpm install         # update and install dependencies\nnpm run build       # this runs craco build behind the scenes\n# .....\nCreating an optimized production build...\n\n<--- Last few GCs ---\x3e\n\n[6041:0x5023900]   932643 ms: Mark-sweep 247.0 (258.6) -> 246.2 (258.1) MB, 398.0 / 0.1 ms  (average mu = 0.125, current mu = 0.049) allocation failure scavenge might not succeed\n[6041:0x5023900]   932940 ms: Mark-sweep 247.5 (258.4) -> 246.4 (258.6) MB, 293.1 / 0.1 ms  (average mu = 0.078, current mu = 0.014) allocation failure scavenge might not succeed\n\n\n<--- JS stacktrace ---\x3e\n\nFATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory\n 1: 0xb02d90 node::Abort() [node]\n 2: 0xa18123 node::FatalError(char const*, char const*) [node]\n 3: 0xceb85e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]\n 4: 0xcebbd7 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]\n 5: 0xeb55b5  [node]\n 6: 0xeb60a4  [node]\n 7: 0xec4517 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]\n 8: 0xec78cc v8::internal::Heap::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]\n 9: 0xe8a1ec v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationType, v8::internal::AllocationOrigin) [node]\n10: 0x11f70a6 v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [node]\n11: 0x15cdf39  [node]\n")),(0,o.kt)("p",null,"Annnd scratch that. I forgot to take into consideration that I'm running an EC2 instance on a budget of around $5/month. Believe it or not, that does not buy you enough resources to build a React app. So I do something a bit more manual with this deployment."),(0,o.kt)("p",null,"So we return to my local terminal and repeat our build steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout main\ngit pull\nnpm install\nnpm run build\n# ... google zip command once again\nzip -r build.zip build\n")),(0,o.kt)("p",null,"And then a quick copy of the build output to the ec2 instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scp ./build.zip myEC2Instance:/home/ec2-user\n")),(0,o.kt)("p",null,"Wonderful. Now, if only I'd left myself notes on how I'd configured this service some 6 months ago..."),(0,o.kt)("p",null,"Rooting through Apache config files I find a ",(0,o.kt)("inlineCode",{parentName:"p"},"<VirtualHost>")," tag that points me in the right direction. After unzipping my files and copying the build to the directory indicated, I decide to sacrifice my 11 9's uptime to figure out how exactly the app is being served."),(0,o.kt)("p",null,"First, I kill Apache"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apachectl -k stop\n")),(0,o.kt)("p",null,"and visit my site which is down as it should be."),(0,o.kt)("p",null,"I restart Apache"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apachectl -k start\n")),(0,o.kt)("p",null,"And the previous version of the app is still being run. Darn. Upon further inspection it looks like I copied my new build into the previous and the issue is quickly remedied."),(0,o.kt)("p",null,"My React site is updated and up and running."),(0,o.kt)("h3",{id:"backend-go-server"},"Backend (Go Server)"),(0,o.kt)("p",null,"In my efforts to stay under budget and not get too caught up in infrastructure, I am going to attempt to deploy my Go app to the same instance."),(0,o.kt)("p",null,"First, let's get the app installed on the instance. The ",(0,o.kt)("a",{parentName:"p",href:"https://go.dev/dl/"},"go.dev")," site has a list of downloads. After finding the appropriate atrifact I was able to run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://go.dev/dl/go1.17.5.linux-amd64.tar.gz  # download go\nsha256sum go1.17.5.linux-amd64.tar.gz               # verify sha against site\nsudo tar -C /usr/local go1.17.5.linux-amd64.tar.gz  # untar artifact\nexport PATH=$PATH:/usr/local/go/bin                 # set PATH\ngo version                                          # confirm install\n")),(0,o.kt)("p",null,"For future reference: ",(0,o.kt)("a",{parentName:"p",href:"https://linuxize.com/post/how-to-install-go-on-centos-7/"},"linuxize")),(0,o.kt)("p",null,"Next, I clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/James-D-Wood/personal-site-go-server"},"go server")," and run the program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go run ./...\n# ...\ngo: downloading github.com/jackc/pgservicefile v0.0.0-20200714003250-2b9c44734f2b\ngo: downloading golang.org/x/crypto v0.0.0-20210711020723-a769d52b0f97\ngo: downloading golang.org/x/text v0.3.6\npanic: failed to connect to `host=localhost user=james database=personal_site`: dial error (dial tcp 127.0.0.1:5432: connect: connection refused)\n")),(0,o.kt)("p",null,"This reveals two problems:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Postgres needs to be installed on this instance and"),(0,o.kt)("li",{parentName:"ol"},"The app needs to be configured to read for environment vars instead of the hardcoded variables I used in development.")),(0,o.kt)("h3",{id:"installing-postgres"},"Installing Postgres"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install (not completely clear how I did this)"),(0,o.kt)("li",{parentName:"ul"},"Create user for application"),(0,o.kt)("li",{parentName:"ul"},"Update ",(0,o.kt)("inlineCode",{parentName:"li"},"pg_hba.conf")," to permit login"),(0,o.kt)("li",{parentName:"ul"},"Create database"),(0,o.kt)("li",{parentName:"ul"},"Run scripts to build schema")),(0,o.kt)("h5",{id:"references"},"References:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/download/linux/redhat/"},"postgresql downloads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/671851/how-to-deal-with-www-postgres-org-certificate-expired"},"letsencrypt cert issues")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://techviewleo.com/install-postgresql-13-on-amazon-linux/"},"amazon specific instructions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/9.1/auth-pg-hba-conf.html"},"pg_hba.conf"))),(0,o.kt)("h3",{id:"configuring-app-for-env"},"Configuring App for Env"),(0,o.kt)("p",null,"The next step is to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API Token"),(0,o.kt)("li",{parentName:"ul"},"Postgres Creds")),(0,o.kt)("h3",{id:"configuring-apache-for-reverseproxy"},"Configuring Apache for ReverseProxy"),(0,o.kt)("p",null,"In order to get requests to my Go app which is running locally on port 8080, I'll need to pipe requests through the standard ports 80 (HTTP) and 443 (HTTPS) as these are the only ports I've exposed to the world using my Security Group. I am already serving my client on this server however, so I'll need to reconfigure Apache a bit."),(0,o.kt)("p",null,"The first thing I needed to figure out was how to serve multiple apps on a single IP-port combination. After some Googling, I came across Name-Based Virtual Hosts. Name-base virtual hosts use the hostname reported by the client to determine routing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'             GET / HTTP/1.1           EC2 Instance   www.jameswood.dev\n             Host: *.jameswood.dev       .----.               ------\x3e React App\n    ||""||   ...                         | == |              |\n    ||__||   -------------------------\x3e  |----| ---\x3e Apache -|\n    [ -=.]`)                             |::::|              |\n    ====== 0                             |___.|               ------\x3e Golang App\n                                         "    "      api.jameswood.dev               .\n')),(0,o.kt)("p",null,"I'll take my original virtual host and add a ",(0,o.kt)("inlineCode",{parentName:"p"},"ServerName")," directive to each to distinguish which host should be used for which hostname. Additionally, I want a ",(0,o.kt)("inlineCode",{parentName:"p"},"ServerAlias")," directive on the record representing the client so that the www prefix is not required. I also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProxyPass")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ProxyPassReverse")," directives as I want to forward the request to my Go Server rather than use Apache as the server as I did in the original VirtualHost."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},'<VirtualHost *:80>\n ServerName "www.jameswood.dev"\n ServerAlias "jameswood.dev"\n DocumentRoot "/var/www/path/to/site"\n ...SSL/redirect directives omitted\n</VirtualHost>\n\n<VirtualHost *:80>\n ServerName "api.jameswood.dev"\n ProxyPass "/"  "http://127.0.0.1:8080/"\n ProxyPassReverse "/"  "http://127.0.0.1:8080/"\n ...SSL/redirect directives omitted\n</VirtualHost>\n')),(0,o.kt)("p",null,"After restarting Apache, creating A records for the www and api subdomains, and running certbot to issue SSL certs, my configuration appears to be ",(0,o.kt)("strong",{parentName:"p"},"almost")," running as expected. It turns out a change I made switching from a ",(0,o.kt)("inlineCode",{parentName:"p"},"HashRouter")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," isn't playing nice with Apache."),(0,o.kt)("p",null,"Before my routes would look something like ",(0,o.kt)("inlineCode",{parentName:"p"},"jameswood.dev/#/notebook"),". What Apache would see was something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'           GET / HTTP/1.1              Apache\n           Host: jameswood.dev         .----.\n  ||""||   ...                         | == |\n  ||__||   -------------------------\x3e  |----| ----\x3e  /var/www/index.html ?\n  [ -=.]`) <-------------------------  |::::| <----  \ud83d\udc4d\n  ====== 0            HTTP/1.1 200 OK  |___.|\n                                       "    "\n')),(0,o.kt)("p",null,"And then the ",(0,o.kt)("inlineCode",{parentName:"p"},"HashRouter")," would work it's magic by using the anchor (hash) portion. But I wanted to get rid of that ugly hash so I switched over to ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," and now the behavior looks a bit more like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'           GET /notebook HTTP/1.1      Apache\n           Host: jameswood.dev         .----.\n  ||""||   ...                         | == |\n  ||__||   -------------------------\x3e  |----| ----\x3e  /var/www/notebook.html ?\n  [ -=.]`) <-------------------------  |::::| <----  \ud83e\udd2c\n  ====== 0     HTTP/1.1 404 NOT FOUND  |___.|\n                                       "    "\n')),(0,o.kt)("p",null,"This is no good because if I want to direct a user to a particular article or page on my site, the user will always have to go to the homepage first and navigate to it themselves. I want to be able to properly create links to my site so lets reconfigure Apache a bit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-apache"},'<Directory "/var/www/path/to/site">\n    RewriteEngine on\n    # Don\'t rewrite files or directories\n    RewriteCond %{REQUEST_FILENAME} -f [OR]\n    RewriteCond %{REQUEST_FILENAME} -d\n    RewriteRule ^ - [L]\n    # Rewrite everything else to index.html\n    RewriteRule ^ index.html [L]\n</Directory>\n')),(0,o.kt)("p",null,"Now when I send a request the resource is automatically redirected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'           GET /notebook HTTP/1.1      Apache\n           Host: jameswood.dev         .----.\n  ||""||   ...                         | == |\n  ||__||   -------------------------\x3e  |----| ----\x3e  /var/www/index.html ?\n  [ -=.]`) <-------------------------  |::::| <----  \ud83d\udc4d\n  ====== 0            HTTP/1.1 200 OK  |___.|\n                                       "    "\n')),(0,o.kt)("h5",{id:"references-1"},"References:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html"},"Apache Docs: Reverse Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://httpd.apache.org/docs/2.4/vhosts/name-based.html"},"Apache Docs: Name Based Virtual Hosts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://httpd.apache.org/docs/2.4/vhosts/examples.html"},"Apache Docs: VirtualHost Examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewritecond"},"Apache Docs: Rewrites")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/48872476"},"Stack Overflow Response for Rewrites"))),(0,o.kt)("h3",{id:"setting-up-go-server-as-a-systemd-service"},"Setting Up Go Server as a Systemd Service"),(0,o.kt)("p",null,"On Linux systems running Systemd, the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/"),' directory contains custom "unit files" that the system admin can manage to create daemons that can be run in the background. I am going to create such a service for our Go App.'),(0,o.kt)("p",null,"The unit file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"# api.service\n[Unit]\nDescription=API\n\n[Service]\nType=simple\nEnvironmentFile=/home/ec2-user/.personal-site\nWorkingDirectory=/home/ec2-user\nExecStart=. .personal-site \\u0026\\u0026 cd personal-site-go-server/ \\u0026\\u0026 go run ./...\nRestart=always\n")),(0,o.kt)("p",null,"After that it's a matter of running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start api\njournalctl -u api\n")),(0,o.kt)("p",null,"And we're off!"),(0,o.kt)("h5",{id:"references-2"},"References:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system_administrators_guide/chap-managing_services_with_systemd#sect-Managing_Services_with_systemd-Unit_Files"},"RedHat Docs: systemd Unit Files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.copperwall.dev/2016-08-04-use-services-for-your-web-apps"},"Practical Example by Copperwall"))),(0,o.kt)("h3",{id:"reflection"},"Reflection"),(0,o.kt)("p",null,"After this exercise I now have"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an EC2 instance with"),(0,o.kt)("li",{parentName:"ul"},"a Apache server running serving"),(0,o.kt)("li",{parentName:"ul"},"jameswood.dev with a React Client and"),(0,o.kt)("li",{parentName:"ul"},"proxying requests to api.jameswood.dev to a systemd service running my Go app, backed by"),(0,o.kt)("li",{parentName:"ul"},"a PostgreSQL service (that is not external exposed)")),(0,o.kt)("p",null,"All for $5/month. Pretty nifty! So here are some of the drawbacks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This instance is ",(0,o.kt)("strong",{parentName:"li"},"completely")," self managed, meaning I have to be on top of manually monitoring and maintenancing not only my site but the instance it runs on."),(0,o.kt)("li",{parentName:"ul"},"Pushing updates is a pain. There is no automation which means about 30 minutes of work ",(0,o.kt)("em",{parentName:"li"},"if")," I remember what I'm doing."),(0,o.kt)("li",{parentName:"ul"},"The instance is not in any way highly available. There is no replication, no distribution between data centers, no failover, no backups. If this VM crashes or gets reclaimed I am back to square one. (There are ways to mitigate this and that is to come.)"),(0,o.kt)("li",{parentName:"ul"},"The instance does not have enough compute to handle Docker, meaning I can't practice this technology in this set up.")),(0,o.kt)("p",null,"But, all that being said, this is a relatively cheap way to run a production environment to experiment in, especially when I'm expected little to no traffic. Also, it gives me great Linux admin practice that I wouldn't normally get in a more Cloud Native environment."),(0,o.kt)("p",null,"Going forward I want to:"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create an image of my VM so that it is easy to recreate on failure."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Automate backups of my database.")))}u.isMDXComponent=!0}}]);