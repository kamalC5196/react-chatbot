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
  ['bad', 'bored', 'tired'],
  ['help me', 'tell me story', 'tell me joke'],
  ['ah', 'yes', 'ok', 'okay', 'nice'],
  ['bye', 'good bye', 'goodbye', 'see you later'],
  ['what should i eat today'],
  ['bro'],
  ['what', 'why', 'how', 'where', 'when'],
  ['no', 'not sure', 'maybe', 'no thanks'],

  ['haha', 'ha', 'lol', 'hehe', 'funny', 'joke'],
  ['give me'],
];

// Possible responses, in corresponding order

const replies = [
  ['Hello 🖐', 'Hi 👋', 'Hey 😉', 'Hi there!', 'Howdy 🤠', 'Hello There', '👋'],
  [
    'Fine 😇.. how are you?',
    'Pretty well, how are you?',
    'Fantastic, how are you?',
    '👌',
    'Rocking as always 🤘',
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
  ['I am infinite'],
  ['I am just a bot', 'I am a bot. What are you?', 'Maybe'],
  ['The one true God, JavaScript'],
  ['I am nameless', "I don't have a name", 'RajiniKanth 😎'],
  ['I love you too 😘', 'Me too 🥰', '😍'],
  ['Have you ever felt bad?', 'Glad to hear it'],
  ['Why?', "Why? You shouldn't!", 'Try watching TV'],
  ['What about?', 'Once upon a time...'],
  ['Tell me a story', 'Tell me a joke', 'Tell me about yourself'],
  ['Bye 🥲', 'Goodbye 🥲', 'See you later 🥲', '🥲', '🥺'],
  ['Sushi', 'Pizza'],
  ['Bro..!'],
  ['Great question'],
  ["That's ok", 'I understand', 'What do you want to talk about?'],
  ['Haha 😂', 'Good one!', '🤣🤣'],
  ['I also want it 😝', 'Bro... 🤣', 'Bro... 😳', 'lol! 😅', 'Why 🤔'],
];

// Random for any other user input

const alternative = [
  'Same',
  'Go on...',
  'Bro...',
  'Try again',
  "I'm listening...",
  "I don't understand :/",
  'oh! come on 😡',
  '🥱',
  '😴',
];

// Whatever else you want :)

const coronavirus = [
  'Please stay home',
  'Wear a mask',
  "Fortunately, I don't have COVID",
  'These are uncertain times',
];

export { prompts, replies, alternative, coronavirus };
