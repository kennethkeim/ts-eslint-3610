function foo(bar: boolean): void {
  // this only triggers the runaway process if it's single line
  if (!bar) throw new Error();

  // there has to be a line of code here to trigger the runaway process
  console.log("foo");
}

foo(false);
