import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps, ButtonType, ButtonSize } from "./button";
import exp from "constants";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonType.Danger,
  size: ButtonSize.Large,
  className: "klass",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
};

// it是test的别名
describe("test Button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument(); // 判断该节点已经在dom上
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-danger btn-lg klass");
  });
  it("should render a link when btnType equals link and href is provided", () => {
    const wrapper = render(
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        link
      </Button>
    );
    const element = wrapper.getByText("link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });
  it("should render disabled button when disabled set to true", () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(defaultProps.onClick).not.toHaveBeenCalled()
  });
});
