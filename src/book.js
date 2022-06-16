function createTitle(title) {
  return "The " + title
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  }
}

function saveReview(title, reviews) {
  if (reviews.includes(title)) {
    return
  } else {
    return (reviews.push(title));
    }
}

function calculatePageCount(title) {
  return title.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
}

function editBook(pageCount) {
  pageCount.pageCount = pageCount.pageCount * .75
}

module.exports = {
  createTitle,
   buildMainCharacter,
   saveReview,
   calculatePageCount,
   writeBook,
   editBook
}