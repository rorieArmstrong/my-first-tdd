describe("fizzbuzz", function() {
    it("should print 'Fizz' when given a number divisible by 3", function() {
        expect(fizzbuzz(3).slice(-1)[0]).toEqual("Fizz")
    })
    it("should print 'Buzz' when given a number divisible by 5", function() {
        expect(fizzbuzz(5).slice(-1)[0]).toEqual("Buzz")
    })
    it("should print 'FizzBuzz' when given a number divisible by 15", function() {
        expect(fizzbuzz(15).slice(-1)[0]).toEqual("FizzBuzz")
    })
})

