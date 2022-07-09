const Notification = ({ message, msgType }) => {
    if (message === null) {
        return null
    }

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const classType = msgType === 'success'? successStyle : errorStyle;

    return (
      <div style={classType}>
        {message}
      </div>
    )
  }

  export default Notification