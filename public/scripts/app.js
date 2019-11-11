"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleRemoveOption = _this.handleRemoveOption.bind(_this);
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);

    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var obj = localStorage.getItem("options");
        var options = JSON.parse(obj);

        if (options) this.setState(function () {
          return { options: options };
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options !== this.state.options) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randPick = Math.floor(Math.random() * this.state.options.length);

      var option = this.state.options[randPick];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Please enter a valid value";
      } else if (this.state.options.indexOf(option) > -1) {
        return "The option already exists";
      }

      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: "handleRemoveOption",
    value: function handleRemoveOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option !== optionToRemove;
          })
        };
      });
    }
  }, {
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = "Not sure what to do...";

      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleRemoveAll: this.handleRemoveAll,
          handleRemoveOption: this.handleRemoveOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return App;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "div",
      { className: "columns twelve header" },
      React.createElement(
        "h4",
        null,
        props.title
      ),
      props.subtitle && React.createElement(
        "h6",
        null,
        props.subtitle
      )
    )
  );
};

Header.defaultProps = {
  title: "inDecision"
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "div",
      { className: "columns twelve" },
      React.createElement(
        "button",
        {
          onClick: props.handlePick,
          disabled: !props.hasOptions,
          className: "button"
        },
        "What should I do?"
      )
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    { className: "row" },
    props.options.length === 0 ? React.createElement(
      "div",
      { className: "six columns" },
      React.createElement(
        "p",
        null,
        "Please add some options"
      )
    ) : React.createElement(
      "div",
      { className: "six columns" },
      React.createElement(
        "p",
        null,
        "Here are some options"
      )
    ),
    React.createElement(
      "div",
      { className: "six columns" },
      React.createElement(
        "button",
        { className: "button", onClick: props.handleRemoveAll },
        "Remove All"
      )
    ),
    React.createElement(
      "div",
      { className: "columns twelve" },
      props.options.map(function (option) {
        return React.createElement(Option, {
          key: option,
          optionText: option,
          handleRemoveOption: props.handleRemoveOption
        });
      })
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.options.value.trim();

      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return { error: error };
      });

      if (!error) e.target.elements.options.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row" },
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement("input", { name: "options", type: "text" }),
            React.createElement("input", {
              "class": "button-primary",
              type: "submit",
              value: "Add Option"
            })
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Option = function Option(props) {
  return React.createElement(
    "div",
    { className: "twelve columns" },
    props.optionText,
    React.createElement(
      "button",
      {
        className: "button",
        onClick: function onClick(e) {
          return props.handleRemoveOption(props.optionText);
        }
      },
      "Remove"
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
