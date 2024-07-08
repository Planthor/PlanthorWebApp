describe("ultility",()=>{
    // default parameters should apply correct transformations and duration
    it('should apply correct transformations and duration with default parameters', () => {
        document.body.innerHTML = '<div id="test-node"></div>';
        const node = document.getElementById('test-node');
        const result = flyAndScale(node);

        expect(result.duration).toBe(150);
        expect(result.css(1)).toContain('transform: translate3d(0px, 0px, 0) scale(1);');
        expect(result.css(1)).toContain('opacity: 1');
    });
})