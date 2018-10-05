const expect            = require('expect'),
      {generateMessage} = require('./message');   


describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from    = 'Jimbo',
            text    = 'rrrawwwnwnmmnnmmmmmawwwwww',
            message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
});