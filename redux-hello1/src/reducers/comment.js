

let comments = [
  {
    content:"第一条评论",
    postId:"1"
  },
  {
    content:"真好",
    postId:"1"
  },
  {
    content:"第二条评论",
    postId:"2"
  }

  ]

  export default function commentReducer(state = comments, action) {
    console.log(action)
    switch (action.type) {
      case 'ADD_COMMENT':
        return [...state ,{ postId: action.postId, content: action.comment }]
      default:
        return state;
    }

  }
