import React, { Component } from "react"
import axios from "axios"

export default class EditArticle extends Component {
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
                        console.log("Record edited")
                        this.setState({ redirectToDisplayArticles: true })
                    }
                }
                else {
                    console.log("Record not edited")
                }
            })
    }


    render() {
        return (
            <div>
                <form>
                    <input type="text"
                        name="title"
                        placeholder="Edit Article"
                        ref={(input) => { this.inputToFocus = input }}
                        value={this.state.title}
                        onChange={this.handleChange}
                    /><br />
                    <input type="text"
                        name="content"
                        placeholder="Edit Content"
                        value={this.state.content}
                        onChange={this.handleChange}
                    /><br />
                    <input type="text"
                        name="thumbnailUrl"
                        placeholder="Edit thumbnail"
                        value={this.state.thumbnailUrl}
                        onChange={this.handleChange}
                    /><br />
                    <input type="text"
                        name="mediaUrl"
                        placeholder="Edit MediaUrl"
                        value={this.state.mediaUrl}
                        onChange={this.handleChange}
                    /><br />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )

    }
}