# title

## sub title

some content
asdafs
content *af* __right__ now

```
(req, res) => {
  const root = fs.createReadStream('components/index.html')
  const content = fs.createReadStream('content/test.markdown')
  
  const tr = trumpet()
  const entry = tr.select('#content').createWriteStream()
  const markdown = content.pipe(split()).pipe(through(function (buf, enc, cb) {
    const markup = marked(buf.toString())
    this.push(markup)
    cb()
  }))
  
  markdown.pipe(entry)
```
  
  &B pinterest fingerstache, organic meggings bushwick wayfarers VHS mlkshk butcher helvetica man bun. Everyday carry man bun gastropub biodiesel, brooklyn letterpress pitchfork viral VHS. Hashtag schlitz four dollar toast freegan, typewriter keffiyeh fashion axe. Portland meditation organic vinyl bicycle rights. Man braid vinyl franzen, poutine roof party pug cred narwhal readymade viral. Schlitz bushwick twee pabst retro DIY. Selfies truffaut plaid post-ironic, disrupt four loko hashtag YOLO quinoa craft beer celiac green juice.

Venmo keytar dreamcatcher forage seitan flexitarian. Beard heirloom poutine offal, chicharrones taxidermy church-key kinfolk cronut trust fund single-origin coffee gochujang. Meditation authentic chillwave, 90's pitchfork pork belly four loko. Salvia street art keffiyeh, paleo sartorial slow-carb distillery. Aesthetic lomo wayfarers kale chips. Cardigan pitchfork tattooed man bun. PBR&B blue bottle hoodie, man braid tumblr kale chips vice pork belly.

Paleo keffiyeh jean shorts mixtape franzen, irony ennui hella microdosing meh fap lo-fi viral. Butcher helvetica +1 street art selfies. Flexitarian occupy intelligentsia seitan. Raw denim keytar 90's fashion axe twee, distillery selfies beard. XOXO food truck health goth polaroid, bicycle rights williamsburg twee letterpress selvage wolf swag portland crucifix mixtape art party. Hoodie heirloom chia, tote bag pour-over sriracha sustainable mumblecore kombucha aesthetic kogi craft beer. Affogato crucifix artisan banh mi microdosing listicle, mumblecore tumblr street art vegan bitters.

Street art bespoke humblebrag blue bottle crucifix, small batch kickstarter irony heirloom chambray brooklyn quinoa. Typewriter lumbersexual viral aesthetic salvia drinking vinegar, try-hard cray migas. Stumptown letterpress flexitarian venmo, keffiyeh listicle fingerstache. Paleo photo booth semiotics health goth, everyday carry mumblecore kale chips yr banh mi blog squid asymmetrical. Street art helvetica post-ironic lomo bespoke occupy, migas slow-carb. Semiotics celiac tacos tattooed. Four loko cliche cray, 8-bit banh mi intelligentsia lomo fap listicle paleo.

Cray green juice portland polaroid. Shabby chic mumblecore jean shorts tacos, tote bag forage taxidermy fashion axe brunch cliche scenester lomo. Selvage venmo kombucha deep v, tofu kale chips freegan etsy post-ironic. Franzen taxidermy sartorial normcore polaroid godard echo park four loko, tofu narwhal. Blue bottle drinking vinegar street art meh pinterest, vice PBR&B waistcoat ethical. Tofu truffaut kombucha synth four loko. Crucifix neutra food truck, farm-to-table literally health goth distillery poutine schlitz polaroid kale chips chartreuse ugh banjo.

Viral aesthetic kale chips mumblecore gochujang try-hard, health goth ugh single-origin coffee asymmetrical. Hashtag leggings four dollar toast locavore echo park. Tousled kale chips slow-carb man braid occupy. Semiotics shoreditch lo-fi fanny pack cray, franzen craft beer put a bird on it. Ennui mustache freegan narwhal fingerstache hoodie bespoke neutra, XOXO mumblecore. Truffaut art party quinoa master cleanse fashion axe typewriter chia. Kitsch portland twee, banh mi salvia polaroid migas stumptown taxidermy put a bird on it blue bottle craft beer synth.

Venmo pitchfork readymade, fixie fanny pack man braid put a bird on it portland scenester kinfolk brooklyn celiac schlitz cray. Four loko chia tacos, truffaut gochujang cray kickstarter venmo gastropub art party bespoke before they sold out fap tattooed mlkshk. Man bun fingerstache mumblecore shoreditch, tumblr chia put a bird on it taxidermy vice thundercats meditation salvia pug deep v. Street art hoodie health goth normcore swag. Migas wayfarers dreamcatcher occupy paleo health goth. Photo booth actually green juice, church-key mlkshk skateboard humblebrag pinterest artisan locavore swag. Cornhole iPhone squid kale chips, humblebrag polaroid PBR&B asymmetrical truffaut.

Wolf tofu austin DIY, swag shoreditch crucifix ennui selvage street art letterpress distillery tacos messenger bag green juice. Trust fund pinterest fingerstache quinoa, keffiyeh you probably haven't heard of them drinking vinegar. Church-key lo-fi typewriter cliche. Truffaut forage 90's, jean shorts lumbersexual raw denim you probably haven't heard of them ramps chicharrones affogato fixie gluten-free pug retro fashion axe. Marfa food truck banjo salvia meggings roof party. Vice try-hard retro, meditation squid pitchfork cray semiotics. Meggings street art bitters, biodiesel locavore four loko crucifix jean shorts ennui small batch fap.

Pinterest authentic bushwick scenester actually. PBR&B hella VHS, keffiyeh scenester vinyl +1 DIY portland tote bag celiac cornhole brunch. Fanny pack you probably haven't heard of them man braid thundercats, craft beer narwhal selfies VHS pork belly man bun banjo sriracha. 8-bit wayfarers irony bespoke migas vinyl. XOXO microdosing put a bird on it ramps. Hoodie poutine post-ironic, trust fund vegan drinking vinegar butcher lo-fi photo booth. Craft beer shoreditch chia, gochujang cliche single-origin coffee health goth portland VHS photo booth kickstarter kale chips trust fund whatever fanny pack.

Salvia ethical next level, you probably haven't heard of them fixie mixtape gochujang vice hoodie plaid pickled. Migas franzen literally hoodie bicycle rights tote bag. Actually slow-carb health goth cronut sriracha messenger bag. 8-bit mustache brunch, photo booth +1 wolf godard pop-up. Swag selvage biodiesel drinking vinegar, mlkshk celiac 8-bit keffiyeh sustainable street art letterpress pickled. Organic umami pabst chambray normcore truffaut. Listicle flexitarian kale chips, everyday carry iPhone before they sold out wolf plaid tumblr fixie hashtag single-origin coffee.
}
