import React, { Component } from "react"
import axios from "axios"
import "./Articles.css";

export default class AddArticle extends Component {
    constructor(props) {
        super(props)

        this.state =
        {
            title: "",
            content: "",
            thumbnailUrl: "",
            mediaUrl: "",

            redirectToDisplayArticles: false
        }
    }


    componentDidMount() {
        this.inputToFocus.focus()
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleSubmit = (e) => {
        e.preventDefault()

        const articleObject =
        {

            title: this.state.title,
            content: this.state.content,
            thumbnailUrl: this.state.thumbnailUrl,
            mediaUrl: this.state.mediaUrl
        }


        axios.post(`http://localhost:8000/articles`, articleObject)
            .then(res => {
                if (res.data) {
                    if (res.data.errorMessage) {
                        alert(res.data.errorMessage)
                    }
                    else {
                        console.log("Record added")
                        this.setState({ redirectToDisplayArticles: true })
                    }
                }
                else {
                    console.log("Record not added")
                }
            })
    }


    render() {
        return (
            <div className="flex flex-center">
                <form>
                    <br></br>
                    TOPIC<br></br>
                    <input type="text"
                        name="title"
                        className="inputArticle" placeholder="Input Topic"
                        ref={(input) => { this.inputToFocus = input }}
                        value={this.state.title}
                        onChange={this.handleChange}
                    /><br /><br></br>

                    CONTENT<br></br>
                    <textarea name="content"
                        rows="6" cols="30" placeholder="Add Content"
                        value={this.state.content}
                        onChange={this.handleChange}
                    /><br /><br></br>
                    
                    THUMBNAIL<br></br>
                    <input type="text"
                        name="thumbnailUrl"
                        className="inputArticle" placeholder="Add A thumbnail"
                        value={this.state.thumbnailUrl}
                        onChange={this.handleChange}
                    /><br /><br></br>

                    MEDIA<br></br>
                    <input type="text"
                        name="mediaUrl"
                        className="inputArticle" placeholder="Add MediaUrl"
                        value={this.state.mediaUrl}
                        onChange={this.handleChange}
                    /><br /><br></br>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )

    }
}