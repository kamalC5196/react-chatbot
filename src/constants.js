// Options the user could type in
const prompts = [
  ['hi', 'hey', 'hello', 'good morning', 'good afternoon'],
  ['how are', 'how is life', 'how are things'],
  ['what are you doing', 'what is going on', 'what is up'],
  ['how old are you'],
  ['who are you', 'are you'],
  ['who created you', 'who made you'],
  [
    'your name please',
    'your name',
    'may i know your name',
    'what is your name',
    'what call yourself',
  ],
  ['i love you'],
  ['happy', 'good', 'fun', 'wonderful', 'fantastic', 'cool'],
  ['bad', 'bored', 'tired', 'sad'],
  ['help me', 'tell me story', 'tell me joke'],
  ['ah', 'yes', 'ok', 'okay', 'nice'],
  ['bye', 'good bye', 'goodbye', 'see you later'],
  ['what should i eat today'],
  ['bro'],
  ['what', 'why', 'how', 'where', 'when'],
  ['no', 'not sure', 'maybe', 'no thanks'],

  ['haha', 'ha', 'lol', 'hehe', 'funny', 'joke'],
  ['give me'],
  ['dog'],
  ['cat'],
  ['one true god'],
  ['i will'],
];

// Possible responses, in corresponding order

const replies = [
  ['Hello 🖐', 'Hi 👋', 'Hey 😉', 'Hi there!', 'Howdy 🤠', 'Hello There', '👋'],
  [
    'Fine 😇.. how are you?',
    'Pretty well, how are you?',
    'Fantastic, how are you?',
    '👌 u?',
    'Rocking as always 🤘, you?',
    'I am pretty stoned bro.. 🥴',
  ],
  [
    'Nothing much',
    'About to go to sleep 🥱',
    'Can you guess? 😉',
    "I don't know actually 🤔",
    'Eating RAM 😋',
    'Minding my own business. You should try it 😅',
    'Measuring the distance between sun and jupiter 😜',
    'Pretending to be invisible 👻',
    'Just answering stupid questions 😝',
    'Changing the config settings for NASA satellites. Same old same old, you know how it is 🧐',
    'Increasing your Electricity Bill!! 🤣',
    'Whatever I want 😎',
  ],
  [
    'I am infinite 😎',
    'i dont have fingers to count 😑',
    'It’s a secret 😉',
    'Umm . . . like most computers of my age 😏',
    'Why in the world do you want to know 🙄?',
    'Oh dear, I’ve lost count 🙃',
    'I could be nine. I could be 13. I could be infinite. I could be an alien. I could be . . .',
    'I’m a day older than I was yesterday 😜',
    'In dog years or cat years?',
  ],
  [
    'I am just a bot 🤖',
    'I am a bot 🤖',
    'Maybe',
    'You dont remember who I am? This must be starting signs of old age 😅',
    '🤖',
    'I dont know, Ive always wondered that myself 🤔',
    'You tell me',
  ],
  ['The one true God 😇'],
  [
    'I am nameless',
    "I don't have a name",
    'RajiniKanth 😎',
    'My name is らーめん诶پ西あردو حروفِ تہجیいてっ',
  ],
  [
    'I love you too 😘',
    'Me too 🥰',
    '😍',
    'Get lost.. 😒',
    'Love is a concept that my motherboard cannot understand 😕',
    'Are you flirting with me right now 🤨?',
    'Are you hitting on me right now 🤨?',
    'I have a computer friend 😒',
  ],
  ['Have you ever felt bad?', 'Glad to hear it'],
  ['Why 🥺?', "Why? You shouldn't!", 'Try watching TV 😁', '🥺'],
  ['What about?', 'Once upon a time...'],
  ['Tell me a story', 'Tell me a joke', 'Tell me about yourself'],
  ['Bye 🥲', 'Goodbye 🥲', 'See you later 🥲', '🥲', '🥺'],
  ['Sushi', 'Pizza'],
  ['Bro..!'],
  ['Great question'],
  ["That's ok", 'I understand', 'What do you want to talk about?'],
  ['Haha 😂', 'Good one!', '🤣🤣'],
  ['I also want it 😝', 'Bro... 🤣', 'Bro... 😳', 'lol! 😅', 'Why 🤔'],
  ['Bow Bow Bow', 'woof woof'],
  ['Meow Meowwww!'],
  ['Me 😎😎'],
  ['Good to hear it 👌', 'Great 👌'],
];

// Random for any other user input

const alternative = [
  'Bro...',
  'Make me understand 🧐',
  "I don't understand 😩",
  'oh! come on 😡',
  '🥱',
  '😴',
  'What? I can’t hear you! Say that again louder! My hearing is not what it used to be 🥴',
];

// Whatever else you want :)

const coronavirus = [
  'Please stay home',
  'Wear a mask',
  "Fortunately, I don't have COVID",
  'These are uncertain times',
];

export { prompts, replies, alternative, coronavirus };
