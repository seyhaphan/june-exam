import React from 'react'
import { bindActionCreators } from 'redux'
import { getArticle } from './reducers/index'
export default function App() {
   return (
      <div>

      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      data: state.getArticle.data
   }
}
const mapDipatchToProps = (dispatch) => {
   return bindActionCreators({
      getArticle
   }, dispatch)
}

export default connect(mapStateToProps, mapDipatchToProps)(ListPosts)