import React,{ Component } from 'react';

class Post extends Component {
    state = {  }
    render() {
        const {
            postId,
            author,
            content,
            imagenUrl,
            comments,
            createComment
        } = this.props;       
        return (
           <div className="card mb-5">
            <div className="card-body card-body-border">
               <p className="card-text">{content}</p>
            </div>
            {imagenUrl && 
              <div className="card-body card-body-border">
                <img className="card-img-top" src={imagenUrl} height="250" alt="Card"/>  
              </div>
            }

               {Boolean(comments.length) && 
               <div className="card-body p-2">
                {comments.map(comment => (
                <div
                    key={comment.id}
                    className="bg-light alert alert-secondary p2 mb-1"
                    role="alert" 
                >
                    <b>{comment.author}:</b>
                    <span>{comment.content}</span>
                </div>
                ))}  
                </div>
               }
            <div className="card-footer p-1">
              <input 
                 ref={ref=> this.commentTextRef = ref}
                 type="text"
                 className="form-control nooutline"
                 placeholder="Escribe un comentario....."
                 onKeyPress={(e) => {
                    if(e.key === 'Enter') {
                       createComment({
                         postId,
                         author,
                         content:this.commentTextRef.value
                       });

                       this.commentTextRef.value = '';
                    }
                 }}                 
              />
            </div>
           </div> 
        );
    }
}

export default Post;