package edu.gatech.seclass.textilator;

import org.junit.Test;

public class MyMainTest {
    // Place all  of your tests in this class, optionally using MainTest.java as an example
    @Test
    public void textilatorTest1() {
         /*
            // Frame 1: <test case number 1 in file catpart.txt.tsl>
            textilator  
            empty input
         */
    }

    @Test
    public void textilatorTest2() {
         /*
            // Frame 2: <test case number 13 in file catpart.txt.tsl>
            textilator  sample.txt
            1 input file provided
         */
    }

    @Test
    public void textilatorTest3() {
         /*
            // Frame 3: <test case number 16 in file catpart.txt.tsl>
            textilator  ""
            Length of the string is 0 
         */
    }

    @Test
    public void textilatorTest4() {
         /*
            // Frame 4: <test case number 17 in file catpart.txt.tsl>
            textilator  "a"
            Length of the string is 1 
         */
    }

    
    @Test
    public void textilatorTest5() {
         /*
            // Frame 5: <test case number 31 in file catpart.txt.tsl>
            textilator –s sample.txt
            Value of field index is zero
         */
    }

    @Test
    public void textilatorTest6() {
         /*
            // Frame 6: <test case number 15 in file catpart.txt.tsl>
            textilator –c lower "abc"
            input file does not exist
         */
    }

    @Test
    public void textilatorTest7() {
         /*
            // Frame 7: <test case number 33 in file catpart.txt.tsl>
            textilator –s 3 sample.txt
            input file does not exist
         */
    }

    @Test
    public void textilatorTest8(){
        /*
            // Frame 8: <test case number 12 in file catpart.txt.tsl>
            textilator 
            no input provided
         */
    }
        
    @Test
    public void textilatorTest9(){
        /*
            // Frame 9: <test case number 11 in file catpart.txt.tsl>
            textilator –a sample.txt 
            Position of the delimiter in the file :  Last line
         */
    }

    @Test
    public void textilatorTest10(){
        /*
            // Frame 10: <test case number 14 in file catpart.txt.tsl>
            textilator –a  /incorrect/path/sample_1.txt
            file exist but path is incorrect
         */
    }

    @Test
    public void textilatorTes11(){
        /*
            // Frame 11: <test case number 10 in file catpart.txt.tsl>
            textilator –a sample.txt 
            Position of the delimiter in the file :  First line
         */
    }

    @Test
    public void textilatorTes12(){
        /*
            // Frame 12: <test case number 9 in file catpart.txt.tsl>
            textilator –a sample.txt 
            Presence of the delimiter in one line :  Not present
         */
    }

    @Test
    public void textilatorTes13(){
        /*
            // Frame 13: <test case number 8 in file catpart.txt.tsl>
            textilator –a sample.txt 
            Presence of the delimiter in the file :  Not present
         */
    }

    @Test
    public void textilatorTes14(){
        /*
            // Frame 14: <test case number 32 in file catpart.txt.tsl>
            textilator -s -1 sample.txt
            Value of a field index :  <0

         */
    }
}
