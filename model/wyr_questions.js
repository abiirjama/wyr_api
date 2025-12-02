// a list of "would you rather" questions with two answer choices
const questions = [
    {
        'question': 'live in a house shaped like a triangle or a house shaped like a circle?',
        'answer1': 'triangle house',
        'answer2': 'circle house'
    },
    {
        'question': 'have a cat-sized elephant or an elephant-sized cat?',
        'answer1': 'cat-sized elephant',
        'answer2': 'elephant-sized cat'
    },
    {
        'question': 'be able to fly or be able to breathe underwater?',
        'answer1': 'fly',
        'answer2': 'breathe underwater'
    },
    {
        'question': 'play any musical instrument or speak any language?',
        'answer1': 'play any musical instrument',
        'answer2': 'speak any language'
    },
    {
        'question': 'be a famous movie star or a famous scientist?',
        'answer1': 'famous movie star',
        'answer2': 'famous scientist'
    },
]

// this function picks a random question from the list
function randomwyrquestion() {
    // generate a random index between 0 and the length of the list
    const randomindex = Math.floor(Math.random() * questions.length)

    // get the question at that index
    const randomquestion = questions[randomindex]

    // return the random question object
    return randomquestion
}

// export the function so it can be used in other files
module.exports = randomwyrquestion
