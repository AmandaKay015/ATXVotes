Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('\n<div class="container" role="document">\n  '),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push("\n</div>\n"),h}),Ember.TEMPLATES.candidate=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g,h="";return b.buffer.push("<a "),e={href:a},f={href:"ID"},g={hash:{href:"facebook"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(o((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):n.call(a,"bind-attr",g)))),b.buffer.push(' class="icon facebook">Facebook</a>'),h}function g(a,b){b.buffer.push("Edit")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k,l,m="",n=c.helperMissing,o=this.escapeExpression,p=this;return e.buffer.push('<section class="page-content candidate-page">\n  <div class="content-row">\n    <h1>'),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"name",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push('</h1>\n    <span class="subtitle">Candidate for '),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"position",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push('</span>\n  </div>\n\n  <div class="row">\n    <div class="one-third"><img '),k={src:b,alt:b},j={src:"ID",alt:"ID"},l={hash:{src:"image",alt:"name"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(o((h=c["bind-attr"]||b["bind-attr"],h?h.call(b,l):n.call(b,"bind-attr",l)))),e.buffer.push('></div>\n    <div class="two-thirds">\n      <h4>Occupation</h4>\n      <p>'),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"occupation",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</p>\n      <h4>Experience</h4>\n      <p>"),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"experience",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push('</p>\n    </div>\n  </div>\n\n  <div class="content-row">\n    <h2>Platform</h2>\n    <ul class="platform menu">\n      <li>Platform item</li>\n      <li>Platform item 2</li>\n    </ul>\n    <h4>Website</h4>\n    <p><a '),k={href:b},j={href:"ID"},l={hash:{href:"url"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(o((h=c["bind-attr"]||b["bind-attr"],h?h.call(b,l):n.call(b,"bind-attr",l)))),e.buffer.push(">"),j={},k={},e.buffer.push(o(c._triageMustache.call(b,"url",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</a></p>\n    <h4>Social Media</h4>\n    "),j={},k={},i=c["if"].call(b,"facebook.length",{hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n  </div>\n\n<!--\n"),j={},k={},l={hash:{},inverse:p.noop,fn:p.program(3,g,e),contexts:[b,b],types:["STRING","ID"],hashContexts:k,hashTypes:j,data:e},h=c["link-to"]||b["link-to"],i=h?h.call(b,"candidate.edit","model",l):n.call(b,"link-to","candidate.edit","model",l),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n-->\n</section>\n"),m}),Ember.TEMPLATES["candidate/edit"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g,h="";return b.buffer.push("\n  <tr>\n    <td>\n      <strong>"),e={},f={},b.buffer.push(k(c._triageMustache.call(a,"key",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push(":</strong>\n    </td>\n    <td>\n      "),f={value:a},e={value:"ID"},g={hash:{value:"value"},contexts:[],types:[],hashContexts:f,hashTypes:e,data:b},b.buffer.push(k((d=c.input||a.input,d?d.call(a,g):l.call(a,"input",g)))),b.buffer.push("\n    </td>\n  </tr>\n  "),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=this.escapeExpression,l=c.helperMissing,m=this;return e.buffer.push("<h1>Candidate</h1>\n\n<table>\n  "),h={},i={},g=c.each.call(b,"buffer",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n</table>\n\n<button "),h={},i={},e.buffer.push(k(c.action.call(b,"save",{hash:{},contexts:[b],types:["STRING"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(">Update</button>\n\n"),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("\n"),j}),Ember.TEMPLATES.candidates=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Map")}function g(a,b){b.buffer.push("All")}function h(a,b){b.buffer.push("About")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l,m,n="",o=this,p=c.helperMissing,q=this.escapeExpression;return e.buffer.push('<header role="banner" class="page-header">\n  <div class="content-row">\n    <a href="/" class="logo">ATX Votes</a>\n    <nav role="navigation" class="main-nav">\n      <ul class="menu">\n        <li><a href="/">Address</a></li>\n        <li>'),k={},l={},m={hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"map",m):p.call(b,"link-to","map",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("</li>\n        <li>"),k={},l={},m={hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"elections",m):p.call(b,"link-to","elections",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("</li>\n        <li>"),k={},l={},m={hash:{},inverse:o.noop,fn:o.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"about",m):p.call(b,"link-to","about",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("</li>\n      </ul>\n    </nav>\n  </div>\n</header>\n\n"),k={},l={},e.buffer.push(q(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}))),e.buffer.push("\n"),n}),Ember.TEMPLATES.election=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n  <tr>\n    <td>\n      <strong>"),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"key",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(":</strong>\n    </td>\n    <td>\n      "),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"value",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\n    </td>\n  </tr>\n  "),f}function g(a,b){b.buffer.push("Change")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k,l,m="",n=this.escapeExpression,o=this,p=c.helperMissing;return e.buffer.push("<h1>Election</h1>\n\n<table>\n  "),j={},k={},h=c.each.call(b,"model.attributes",{hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</table>\n\n"),j={},k={},l={hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b,b],types:["STRING","ID"],hashContexts:k,hashTypes:j,data:e},h=c["link-to"]||b["link-to"],i=h?h.call(b,"election.edit","model",l):p.call(b,"link-to","election.edit","model",l),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n\n"),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("\n"),m}),Ember.TEMPLATES["election/edit"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g,h="";return b.buffer.push("\n  <tr>\n    <td>\n      <strong>"),e={},f={},b.buffer.push(k(c._triageMustache.call(a,"key",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push(":</strong>\n    </td>\n    <td>\n      "),f={value:a},e={value:"ID"},g={hash:{value:"value"},contexts:[],types:[],hashContexts:f,hashTypes:e,data:b},b.buffer.push(k((d=c.input||a.input,d?d.call(a,g):l.call(a,"input",g)))),b.buffer.push("\n    </td>\n  </tr>\n  "),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=this.escapeExpression,l=c.helperMissing,m=this;return e.buffer.push("<h1>Election</h1>\n\n<table>\n  "),h={},i={},g=c.each.call(b,"buffer",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n</table>\n\n<button "),h={},i={},e.buffer.push(k(c.action.call(b,"save",{hash:{},contexts:[b],types:["STRING"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(">Update</button>\n\n"),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("\n"),j}),Ember.TEMPLATES.elections=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Map")}function g(a,b){b.buffer.push("All")}function h(a,b){b.buffer.push("About")}function i(a,b){var d,e,f,g="";return b.buffer.push('\n    <div class="election-blurb">\n      <h3>'),e={},f={},b.buffer.push(s(c._triageMustache.call(a,"item.election.name",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push("</h3>\n      <p>"),e={},f={},b.buffer.push(s(c._triageMustache.call(a,"item.election.description",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push('</p>\n    </div>\n\n    <h2>Candidates:</h2>\n    <ul class="candidate-list menu">\n      '),e={},f={},d=c.each.call(a,"candidate","in","item.candidates",{hash:{},inverse:t.noop,fn:t.program(8,j,b),contexts:[a,a,a],types:["ID","ID","ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n    </ul>\n  "),g}function j(a,b){var d,e,f,g,h,i="";return b.buffer.push("\n      <li>\n        "),f={"class":a},g={"class":"STRING"},h={hash:{"class":"candidate"},inverse:t.noop,fn:t.program(9,k,b),contexts:[a,a],types:["STRING","ID"],hashContexts:f,hashTypes:g,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"candidate","candidate",h):r.call(a,"link-to","candidate","candidate",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n      </li>\n      "),i}function k(a,b){var d,e,f,g,h="";return b.buffer.push("\n          <img "),e={src:a,alt:a},f={src:"ID",alt:"ID"},g={hash:{src:"candidate.image",alt:"candidate.name"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(s((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):r.call(a,"bind-attr",g)))),b.buffer.push('>\n          <div class="info">\n            '),f={},e={},b.buffer.push(s(c._triageMustache.call(a,"candidate.name",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push('\n            <span class="position">Running for: '),f={},e={},b.buffer.push(s(c._triageMustache.call(a,"candidate.position",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}))),b.buffer.push("</span>\n          </div>\n        "),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var l,m,n,o,p,q="",r=c.helperMissing,s=this.escapeExpression,t=this;return e.buffer.push('<header role="banner" class="page-header">\n  <div class="content-row">\n    <a href="/" class="logo">ATX Votes</a>\n    <nav role="navigation" class="main-nav">\n      <ul class="menu">\n        <li><a href="/">Address</a></li>\n        <li>'),n={},o={},p={hash:{},inverse:t.noop,fn:t.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"map",p):r.call(b,"link-to","map",p),(m||0===m)&&e.buffer.push(m),e.buffer.push("</li>\n        <li>"),n={},o={},p={hash:{},inverse:t.noop,fn:t.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"elections",p):r.call(b,"link-to","elections",p),(m||0===m)&&e.buffer.push(m),e.buffer.push("</li>\n        <li>"),n={},o={},p={hash:{},inverse:t.noop,fn:t.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"about",p):r.call(b,"link-to","about",p),(m||0===m)&&e.buffer.push(m),e.buffer.push('</li>\n      </ul>\n    </nav>\n  </div>\n</header>\n<section class="content-row page-content election-page">\n  '),n={},o={},m=c.each.call(b,"item","in","candidates",{hash:{},inverse:t.noop,fn:t.program(7,i,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:o,hashTypes:n,data:e}),(m||0===m)&&e.buffer.push(m),e.buffer.push("\n</section>\n\n"),n={},o={},e.buffer.push(s(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:o,hashTypes:n,data:e}))),e.buffer.push("\n"),q}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("District Map")}function g(a,b){b.buffer.push("All Candidates")}function h(a,b){b.buffer.push("Candidates")}function i(a,b){b.buffer.push("Elections")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var j,k,l,m,n,o="",p=c.helperMissing,q=this.escapeExpression,r=this;return e.buffer.push('<div class="homepage content-row">\n  <a href="/" class="logo">ATX Votes homepage</a>\n\n  <div class="fade-in page-content">\n    <p class="instruction-text">Instructional text for the address bar lorem ipsum dolor sit amet.</p>\n    <form name="address-form">\n      <label for="address">Address</label>\n      '),l={name:b,id:b,placeholder:b},m={name:"STRING",id:"STRING",placeholder:"STRING"},n={hash:{name:"address",id:"address",placeholder:"street address"},contexts:[],types:[],hashContexts:l,hashTypes:m,data:e},e.buffer.push(q((j=c.input||b.input,j?j.call(b,n):p.call(b,"input",n)))),e.buffer.push("\n      <button "),m={},l={},e.buffer.push(q(c.action.call(b,"findDistrict",{hash:{},contexts:[b],types:["STRING"],hashContexts:l,hashTypes:m,data:e}))),e.buffer.push(' type="submit" class="submit">Go</button>\n    </form>\n    <span class="or">or</span>\n    <p class="entry-options">\n      '),m={},l={},n={hash:{},inverse:r.noop,fn:r.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:m,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"map",n):p.call(b,"link-to","map",n),(k||0===k)&&e.buffer.push(k),e.buffer.push("\n      "),m={},l={},n={hash:{},inverse:r.noop,fn:r.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:m,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"elections",n):p.call(b,"link-to","elections",n),(k||0===k)&&e.buffer.push(k),e.buffer.push("\n    </p>\n    <!--<p>"),l={"class":b},m={"class":"STRING"},n={hash:{"class":"button"},inverse:r.noop,fn:r.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:m,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"candidates",n):p.call(b,"link-to","candidates",n),(k||0===k)&&e.buffer.push(k),e.buffer.push("</p>\n    <p>"),l={"class":b},m={"class":"STRING"},n={hash:{"class":"button"},inverse:r.noop,fn:r.program(7,i,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:m,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"elections",n):p.call(b,"link-to","elections",n),(k||0===k)&&e.buffer.push(k),e.buffer.push("</p>-->\n  </div>\n</div>\n"),o}),Ember.TEMPLATES.map=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="subpage content-row">\n  <a href="/" class="logo">ATX Votes homepage</a>\n\n  <div class="page-content">\n    <h2>Map Page</h2>\n  </div>\n</div>\n\n')});