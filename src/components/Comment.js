const Comment = () => {
    return(
        <div>
            <div className="comment-section">
                <h3>0 Komentar</h3>
                <input type="text" placeholder="Nama" className="comment-input" />
                <textarea placeholder="Tulis Komentar" className="comment-textarea"></textarea>
                <button className="comment-button">Kirim</button>
            </div>
        </div>
    )
}

export default Comment