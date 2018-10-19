import React, { Component } from "react";

export default class BookList extends Component {
  constructor(props) {
    super(props);

    let bookdata;
    if (__isBrowser__) {
      bookdata = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      bookdata = this.props.staticContext.data;
    }

    this.state = {
      bookdata,
      fetching: bookdata ? false : true
    };
    this.getBooks = this.getBooks.bind(this);
  }
  componentDidMount() {
    if (!this.state.bookdata) {
      this.getBooks(this.props.match.params.id);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getBooks(this.props.match.params.id);
    }
  }
  getBooks(title) {
    this.setState(() => ({
      fetching: true
    }));

    this.props.fetchInitialData(title).then(bookdata =>
      this.setState(() => ({
        bookdata,
        fetching: false
      }))
    );
  }
  render() {
    const { fetching, bookdata } = this.state;

    if (fetching) {
      return <p>Getting Books data</p>;
    }

    const Style = {
      author : {
        fontStyle: "italic", display: "block" , color:"#5a00ff"
      },
      book : {
        display: "table-cell", verticalAlign: "middle", paddingLeft: 10,
      },
      title : {
        color: "#333", textDecoration: "none" 
      },
      cell : {
        margin: 15, display: "table" ,  border : "2px solid #eee", backgroundColor: "#63d4b0", padding: 10,  borderRadius: 10
      }
    }

    return (
      <div style={{ display: "block" }}>
        {bookdata.map(
          ({ bookId, bookUrl, title, author }) => (
            <div key={bookId} style={Style.cell}>
              <span style={Style.book} >
                <a
                  href={`https://www.goodreads.com${bookUrl}`}
                  style={Style.title}
                  target="_blank"
                >
                  {title}
                </a>
                <span 
                style = {Style.author}
                >
                  Author: {author.name}
                </span>
              </span>
            </div>
          )
        )}
      </div>
    );
  }
}
