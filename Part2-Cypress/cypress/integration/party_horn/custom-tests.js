describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it("Slider changes when volume input changes", () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el){
      expect($el).to.have.value(75);
    });
  });

  it("Input changes when volume slider changes", () => {
    cy.get('#volume-slider').invoke('val', 33);
    cy.get('#volume-slider').trigger("input");
    cy.get('#volume-number').then(function($el){
      expect($el).to.have.value(33);
    });
  });

  it("Volumn changes when volume slider changes", () => {
    cy.get('#volume-slider').invoke('val', 33);
    cy.get('#volume-slider').trigger("input");
    cy.get('#horn-sound').then(function($el){
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it("Image and Sound changes when select party horn", () => {
    cy.get('#radio-party-horn').click();
    cy.get('#radio-party-horn').trigger("input");
    cy.get('#sound-image').then(function($el){
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/assets/media/images/party-horn.svg");
    });
    cy.get('#horn-sound').then(function($el){
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/assets/media/audio/party-horn.mp3");
    });
  });

  it("Image changes when volume change", () => {
    cy.get('#volume-slider').invoke('val', 0);
    cy.get('#volume-slider').trigger("input");
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/assets/media/icons/volume-level-0.svg");
    });

    cy.get('#volume-slider').invoke('val', 10);
    cy.get('#volume-slider').trigger("input");
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/assets/media/icons/volume-level-1.svg");
    });

    cy.get('#volume-slider').invoke('val', 50);
    cy.get('#volume-slider').trigger("input");
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/assets/media/icons/volume-level-2.svg");
    });

    cy.get('#volume-slider').invoke('val', 100);
    cy.get('#volume-slider').trigger("input");
    cy.get('#volume-image').then(function($el){
      expect($el).to.have.prop('src', "http://127.0.0.1:5500/assets/media/icons/volume-level-3.svg");
    });
  });

  it("Slider changes when volume input changes", () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(function($el){
      expect($el).to.have.prop("disabled", true);
    });

    cy.get('#volume-number').clear().type('Im your father');
    cy.get('#honk-btn').then(function($el){
      expect($el).to.have.prop("disabled", true);
    });
  });

  it("Output error when input sound value larger than 100", () => {
    cy.get('#volume-number').clear().type('120');
    cy.get('#volume-number:invalid').then(function($el){
      expect($el).to.have.prop('validationMessage','Value must be less than or equal to 100.')
    });
  });
});
