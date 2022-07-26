let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let paragraph = document.getElementById("pargraph");
  let writer = document.getElementById("writer");
  const content = [
    {
      quotes:
        " Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
      author: "jems klear",
    },
    {
      quotes:
        "Allow these 150 inspirational quotes about life to give you an extra pep in your step whenever you may need it. Keep these life quotes bookmarked on your phone or computer to pull up and scroll through whenever you need a little pick me up.",
      author: "john",
    },
    {
      quotes:
        "“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s",
      author: "stev jops",
    },
    {
      quotes:
        " Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off",
      author: "kevin hart",
    },
  ];
  let random = Math.floor(Math.random() * content.length);
  paragraph.innerHTML = content[random].quotes;
  writer.innerHTML = content[random].author;
});
