import { Font } from '../fonts';

test('calculateTextDimensions', () => {
    let font : Font = Font.createStandardFont({obj: 0, generation: 0}, "/F1", "/Courier")
    expect(font.calculateTextDimensions("Lorem Ipsum", 1)[0]).toEqual(6.599999999999999);
    expect(
        font.calculateTextDimensions(
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            , 1)[0]).toEqual(92.99999999999983);

    expect(font.calculateTextDimensions("Lorem Ipsum", 16)[0]).toEqual(105.59999999999998);

    font = Font.createStandardFont({obj: 0, generation: 0}, "/F1", "/Helvetica")

    // Result shows discrepancies to 5.8 Kerning? or space between chars?
    expect(font.calculateTextDimensions("Lorem Ipsum", 1)[0]).toEqual(5.835000000000001);

    // Result shows discrepancies to 69.5499999999999 Kerning? or space between chars?
    expect(
        font.calculateTextDimensions(
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.", 1)[0]).toEqual(69.8479999999999);
})

test('calculateTextDimensionsInMM', () => {
    let font : Font = Font.createStandardFont({obj: 0, generation: 0}, "/F1", "/Courier")
    expect(font.calculateTextDimensionsInMM("Lorem Ipsum", 16)[0]).toEqual(37.25333333333332);
    expect(
        font.calculateTextDimensionsInMM(
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.", 16)[0]
    ).toEqual(524.9333333333324);

    font = Font.createStandardFont({obj: 0, generation: 0}, "/F1", "/Helvetica")

    // Result shows discrepancies to 32.73777777777777 Kerning? or space between chars?
    expect(font.calculateTextDimensionsInMM("Lorem Ipsum", 16)[0]).toEqual(32.93533333333333);

    // Result shows discrepancies to 392.5711111111105 Kerning? or space between chars?
    expect(
        font.calculateTextDimensionsInMM(
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.", 16)[0]).toEqual(394.25315555555494);
})

test('getTextWidthArray', () => {
    let font : Font = Font.createStandardFont({obj: 0, generation: 0}, "/F1", "/Courier")

    expect(font.getTextWidthArray("uesday", 1)).toEqual([
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6
    ]);

    expect(font.getTextWidthArray("Tuesday", 1)).toEqual([
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6,
        0.6
    ]);

})

test('getTextWidthArray_kerning', () => {
    let font : Font = Font.createStandardFont({obj: 0, generation: 0}, "/F1", "/Helvetica")

    expect(font.getTextWidthArray("uesday", 1)).toEqual([
        0.556,
        0.556,
        0.5,
        0.556,
        0.556,
        0.47
    ]);

    expect(font.getTextWidthArray("Tuesday", 1)).toEqual([
        0.611,
        0.436,
        0.556,
        0.5,
        0.556,
        0.556,
        0.47
    ]);
})

test('proposeLinebreaks', () => {
    let font : Font = Font.createStandardFont({obj: 0, generation: 0}, "/F1", "/Helvetica")
    let res_val = font.proposeLinebreaks("hello world", 18, 200)
    expect(res_val[0].start).toBe(0)
    expect(res_val[0].end).toBe(10)
    expect(res_val[0].width).toBe(86.112)

    res_val = font.proposeLinebreaks("hello world", 18, 50)
    expect(res_val[0].start).toBe(0)
    expect(res_val[0].end).toBe(4)
    expect(res_val[0].width).toBe(38.016)

    expect(res_val[1].start).toBe(6)
    expect(res_val[1].end).toBe(10)
    expect(res_val[1].width).toBe(43.092)
})
