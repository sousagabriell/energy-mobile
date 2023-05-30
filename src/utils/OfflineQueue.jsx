import React from 'react';

class OfflineQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queue: [] };
    this.enqueue = this.enqueue.bind(this);
    this.dequeue = this.dequeue.bind(this);
    this.clear = this.clear.bind(this);
  }

  enqueue(item) {
    this.setState((prevState) => ({
      queue: [...prevState.queue, item],
    }));
  }

  dequeue() {
    this.setState((prevState) => ({
      queue: prevState.queue.slice(1),
    }));
  }

  clear() {
    this.setState({ queue: [] });
  }

  render() {
    const { queue } = this.state;
    const { children } = this.props;

    return (
      <React.Fragment>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { queue, enqueue: this.enqueue, dequeue: this.dequeue, clear: this.clear });
        })}
      </React.Fragment>
    );
  }
}

export default OfflineQueue;
