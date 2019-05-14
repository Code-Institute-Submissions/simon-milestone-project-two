describe("Button states", function() {

    describe("Mute sound", function() {

        beforeEach(function() {
            sound = false;
            let volBtn = $("#volume-btn");
        });

        it("should return sound = false", function() {
            expect(sound).toBe(false);
        });

        it("should return sound = true", function() {
            sound = true;
            expect(sound).toBe(true);
        });

    });

    describe("Power state", function() {

        beforeEach(function() {
            power = false;
            let powerBtn = $("#power-btn");
        });

        it("should return power = false", function() {
            expect(power).toBe(false);
        });

        it("should return power = true", function() {
            power = true;
            expect(power).toBe(true);
        });

    });

    describe("Hard mode state", function() {

        beforeEach(function() {
            hard = false;
            let hardBtn = $("#hard-btn");
        });

        it("should return hard = false", function() {
            expect(hard).toBe(false);
        });

        it("should return hard = true", function() {
            hard = true;
            expect(hard).toBe(true);
        });

    });

    describe("Strict mode state", function() {

        beforeEach(function() {
            strict = false;
            let strictBtn = $("#strict-btn");
        });

        it("should return hard = false", function() {
            expect(strict).toBe(false);
        });

        it("should return hard = true", function() {
            strict = true;
            expect(strict).toBe(true);
        });

    });

});

describe("userWin function", function() {
    
    beforeEach(function() {
        win = false;
    });
    
    it("should return win = true", function() {
        win = true;
        let result = userWin();
        expect(win).toBe(true);
    });
    
});

describe("resetColor function", function() {
    
    beforeEach(function() {
        let yellowBtn = $("#yellow-btn");
        let redBtn = $("#red-btn");
        let greenBtn = $("#green-btn");
        let blueBtn = $("#blue-btn");
    });
    
    it("should remove class 'lit' from all game buttons", function() {
        resetColor();
        expect(yellowBtn).not.toHaveClass("lit");
        expect(redBtn).not.toHaveClass("lit");
        expect(greenBtn).not.toHaveClass("lit");
        expect(blueBtn).not.toHaveClass("lit");
    });
    
});