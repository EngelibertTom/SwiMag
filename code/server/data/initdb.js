

const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./data/ecoalDB', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE
  , (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Connected to the ecoal database.');
    }
  });


let query = [
  "PRAGMA foreign_keys = ON",
  "DROP TABLE IF EXISTS article_tag",
  "DROP TABLE IF EXISTS user",
  "DROP TABLE IF EXISTS article",
  "DROP TABLE IF EXISTS media",
  "DROP TABLE IF EXISTS tag",


  "CREATE TABLE media (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT NOT NULL, file TEXT NOT NULL)",
  "CREATE TABLE user (id_User INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, photo TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, access TEXT NOT NULL)",
  "CREATE TABLE article (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, content TEXT NOT NULL, thumbnailURL TEXT, id_media INTEGER REFERENCES media(id), mediaURL TEXT)",
  "CREATE TABLE tag (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)",
  "CREATE TABLE article_tag (id INTEGER PRIMARY KEY AUTOINCREMENT, id_article INTEGER REFERENCES article(id), id_tag INTEGER REFERENCES tag(id))",
  "INSERT INTO user (id_User, name, photo, email, password, access) values ('1', 'Tom', 'ecoal.jpg', 'tom@gmail.com','123','admin')",
  "INSERT INTO user (id_User, name, photo, email, password, access) values ('2', 'Yue', 'ecoal.jpg', 'yue@gmail.com','456','user')",
  "INSERT INTO user (id_User, name, photo, email, password, access) values ('3', 'Remi', 'ecoal.jpg', 'remi@gmail.com','789','user')",
  "INSERT INTO user (id_User, name, photo, email, password, access) values ('2', 'Paulo', 'ecoal.jpg', 'paulo@gmail.com','135','user')",
  "INSERT INTO media (id, type, file) values ('1', 'photo', 'Olimpics')",
  "INSERT INTO media (id, type, file) values ('2', 'video', 'Olimpics')",
  "INSERT INTO media (id, type, file) values ('3', 'sound', 'Olimpics')",
  "INSERT INTO media (id, type, file) values ('4', 'sound', 'Olimpics')",
  "INSERT INTO media (id, type, file) values ('5', 'sound', 'Olimpics')",
  "INSERT INTO media (id, type, file) values ('6', 'sound', 'Olimpics')",
  "INSERT INTO article (id, title, content, thumbnailURL, id_media, mediaURL) values ('1','Learn to swim', 'Fed up with being sidelined by swimmer’s shoulder? Here’s your ultimate guide to fixing and preventing shoulder injuries from swimming.In this guide to swimmer’s shoulder, we are going to look closely at the most common injury swimmers experience in the water. More specifically, we are going to look at: Just how often swimmer’s shoulder happens The more common causes of swimmer’s shoulders Tips on how you can train around injured shoulders And some actionable tips for helping fix and prevent swimmer’s shoulder. Let’s dive right in', 'article1.png', '1', 'article1.jpg')",
  "INSERT INTO article (id, title, content, thumbnailURL, id_media, mediaURL) values ('2','7 Things Swimming Will Teach You About Life', 'Swimming isn’t just about bad tan lines, having raccoon eyes and early mornings. And it’s not just about records, gold medals and best times.And its not just all the glorious health benefits of swimming.Although there are plenty of those. Swimming, and sport in general, provide a proving ground for some of the most fundamental and critical things that you will carry with you for the rest of your life. Whether in your career, in personal relationships, or even different sports, swimming will teach you the importance of hard work, of being humble, and of being a team player. Here are 7 things swimming will teach you about life:','article2.png', '2', 'article2.png')",
  "INSERT INTO article (id, title, content, thumbnailURL, id_media, mediaURL) values ('3','Practice Is Everything: The Mindset Behind Superhero Workouts', 'If you are serious about accomplishing big things in the pool you need to rethink the way you train. Here is why practice is everything. Oh, I know, it sounds like I’m being hyperbolic… practice is everything. It sounds like something you would repost to your Instagram feed on a fancy background with a setting sun or a swimmer thundering across the pool with frenzied determination. (Here, I went ahead and did it for you below.) Or something that coach would scrawl across the top of the whiteboard, to which you would mentally flush along with the rest of the inspirational crap your teachers, parents and social media feeds try to impress on you. If excellence in the water (or anything else in life for that matter) is important to you, and it is something you are struggling on achieving, than you need to rethink the way you approach practicing. Here is just some of the cool stuff that happens when you start acting like practice is everything.','article3.jpg', '3', 'article3.jpg')",
  "INSERT INTO article (id, title, content, thumbnailURL, id_media, mediaURL) values ('4','How to Swim Faster Freestyle', 'Ready to take your freestyle to the next level? Here are the most important things you need to know about swimming faster freestyle. At times trying to improve our freestyle stroke can feel infuriating. We see how one swimmer does it, emulate them, and find ourselves swimming slower. Or we have coaches and instructors given us conflicting opinions on how best to do it. Today the confusion and frustration stops. Referencing the latest research on elite swimmers we will dive into hacking the freestyle stroke. We’ll hit the following topics in this little guide in how to swim faster freestyle: ','article4.jpg', '4', 'article4.jpg')",
  "INSERT INTO article (id, title, content, thumbnailURL, id_media, mediaURL) values ('5','The Top 6 Core Exercises for Swimmers', 'Having a powerful core will make you a better, stronger swimmer. Here is a quick list of my top 6 core exercises for swimmers. The importance of core strength for fast swimming has become more mainstream over the past couple of decades. Where at one point swimmers would be given a couple of sets of crunches after practice, now they are prescribed core workouts that are designed to help improve all aspects of performance in the pool, from building a better underwater dolphin kick, a faster flip turn, and even a more explosive start. Although doing an endless number of crunches might make you look good in the mirror, do they give you the strong posture necessary to power through the water? Not necessarily. Instead, when doing core exercises for swimmers the objectives go beyond having that vaunted six-pack that is typical of the swimmer’s body:','article5.jpg', '5', 'article5.jpg')",
  "INSERT INTO article (id, title, content, thumbnailURL, id_media, mediaURL) values ('6','Butterfly Sets: How to Dominate Your Next 100m Butterfly ', '“You gotta go out fast, and come back faster!” is one of those lines swim coaches love to use to explain racing strategy. There are fewer swimmers who practiced this embodiment more consistently and more dramatically than the greatest swimmer of all time, North Baltimore’s Michael Phelps. Time and time again, especially in the shorter races, Phelps has used his monster back-half to surge further ahead, or in the most dramatic and nail-biting of occasions, taking the lead on the final possible stroke as he did in 2008 at the Olympics against Mike Cavic of Serbia. SEE ALSO: Michael Phelps Underwater Dolphin Kick Training [Video] The following swimming workouts were created by Bob Bowman (with inspiration coming from the late legendary Stanford/Auburn coach Richard Quick for the second set), and are found in the Swim Coaching Bible (Volume 2), who used the sets with Michael Phelps to help develop that legendary back-half. Two Butterfly Sets for 100m Butterfliers  Here are the butterfly stroke sets to help you build a Phelpsonian second 50:','article6.jpg', '6', 'article6.jpg')",
  "INSERT INTO tag (id, name) values ('1', 'registered')",
  "INSERT INTO tag (id, name) values ('2', 'unregistered')",
  "INSERT INTO article_tag (id, id_article, id_tag) values ('1', '1', '1')",
  "INSERT INTO article_tag (id, id_article, id_tag) values ('2', '2', '2')",
  "INSERT INTO article_tag (id, id_article, id_tag) values ('3', '3', '2')",
]

db.serialize(() => {

  query.forEach(item => {
    db.run(item, err => {
      if (err)
        return console.error(err.message)
      console.log(item + ` done`)
    })
  })

})

db.close(err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
