import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const todo = {
  id: 1,
  title: "test",
  description: "for editabletodo",
  priority: 1,
};

describe("EditableTodo tests", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={todo} />);
  });

  // it("matches screenshot", function () {
  //   const { container } = render(<EditableTodo todo={todo} />);
  //   expect(container).toMatchSnapshot();
  // });

  it("contains correct text from todo", function () {
    const result = render(<EditableTodo todo={todo} />);
    expect(result.queryByText("test")).toBeInTheDocument();
    expect(result.queryByText("for editabletodo")).toBeInTheDocument();
    expect(result.queryByText("blah")).not.toBeInTheDocument();
  });

  it("delete button should call delete", function () {
    const deleteMock = jest.fn();
    deleteMock.mockClear();

    const { container } = render(<EditableTodo todo={todo} remove={deleteMock} />);
    const deleteButton = container.querySelector(".EditableTodo-delBtn");
    fireEvent.click(deleteButton);
    expect(deleteMock).toHaveBeenCalledTimes(1);
  })
})