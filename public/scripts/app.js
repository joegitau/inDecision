"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// counter app

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var stringCount = localStorage.getItem("count");
      var count = parseInt(stringCount, 10);

      if (!isNaN(count)) {
        this.setState(function () {
          return { count: count };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem("count", this.state.count);
      }
    }
  }, {
    key: "handleAddOne",
    value: function handleAddOne() {
      this.setState(function (prevState) {
        return { count: prevState.count + 1 };
      });
    }
  }, {
    key: "handleMinusOne",
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        return { count: prevState.count - 1 };
      });
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      this.setState(function () {
        return { count: 0 };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "twelve columns" },
            React.createElement(
              "div",
              { className: "three columns" },
              React.createElement(
                "h5",
                null,
                this.state.count === 0 ? "Zero" : this.state.count
              )
            ),
            React.createElement(
              "div",
              { className: "nine columns" },
              React.createElement(
                "button",
                { onClick: this.handleAddOne, className: "button" },
                "Increment"
              ),
              React.createElement(
                "button",
                { onClick: this.handleMinusOne, className: "button" },
                "Decrement"
              ),
              React.createElement(
                "button",
                { onClick: this.handleReset, className: "button" },
                "Reset"
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

// let count = 0;
// const addOne = () => {
//   console.log("add one");
//   count++;
//   renderApp();
// };

// const minusOne = () => {
//   console.log("minus one");
//   count--;
//   renderApp();
// };

// const resetCount = () => {
//   console.log("reset count");
//   count = 0;
//   renderApp();
// };

// const renderApp = () => {
//   const templateThree = (
//     <div className="container">
//       <div className="row">
//         <div className="twelve columns">
//           <div className="three columns">
//             <h5>{count === 0 ? "Zero" : count}</h5>
//           </div>
//           <div className="nine columns">
//             <button onClick={addOne} className="button">
//               Increment
//             </button>
//             <button onClick={minusOne} className="button">
//               Decrement
//             </button>
//             <button onClick={resetCount} className="button">
//               Reset
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   ReactDOM.render(templateThree, document.getElementById("root"));
// };

// renderApp();
