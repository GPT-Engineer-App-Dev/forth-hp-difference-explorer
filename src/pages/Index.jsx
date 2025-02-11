import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-900 text-blue-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Forth vs HP RPL</h1>
          <p className="text-xl text-blue-200">A Comparative Analysis</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-blue-200 mb-4">
            This page provides a comparative analysis of Forth and HP RPL, two stack-based programming languages. 
            While they share some similarities, there are key differences in their syntax, features, and use cases.
          </p>
          <p className="text-blue-200">
            Notably, RPL (Reverse Polish Lisp) was the programming language used by the HP48 series of calculators, 
            which were popular among engineers and scientists in the 1990s and early 2000s. This implementation of RPL 
            showcased its power in handling complex mathematical operations and its suitability for handheld devices.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Comparison Table</h2>
          <ScrollArea className="h-[400px] w-full rounded-md border bg-blue-800">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px] text-blue-100">Aspect</TableHead>
                  <TableHead className="text-blue-100">Forth</TableHead>
                  <TableHead className="text-blue-100">HP RPL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-blue-200">Origin</TableCell>
                  <TableCell className="text-blue-100">Developed by Charles H. Moore in the 1970s</TableCell>
                  <TableCell className="text-blue-100">Developed by Hewlett-Packard in the 1980s, notably used in HP48 calculators</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-blue-200">Syntax</TableCell>
                  <TableCell className="text-blue-100">Postfix notation (Reverse Polish Notation)</TableCell>
                  <TableCell className="text-blue-100">Postfix notation (Reverse Polish Notation)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-blue-200">Data Types</TableCell>
                  <TableCell className="text-blue-100">Primarily works with integers and addresses</TableCell>
                  <TableCell className="text-blue-100">Supports various data types including complex numbers and matrices</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-blue-200">Memory Management</TableCell>
                  <TableCell className="text-blue-100">Manual memory management</TableCell>
                  <TableCell className="text-blue-100">Automatic memory management with garbage collection</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-blue-200">Extensibility</TableCell>
                  <TableCell className="text-blue-100">Highly extensible, allows defining new words</TableCell>
                  <TableCell className="text-blue-100">Extensible, allows defining new functions and commands</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ScrollArea>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Code Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Forth</h3>
              <pre className="bg-blue-800 p-4 rounded-md overflow-x-auto text-blue-100">
                <code>
                  : FACTORIAL ( n -- n! )<br/>
                  &nbsp;&nbsp;DUP 0= IF DROP 1 EXIT THEN<br/>
                  &nbsp;&nbsp;DUP 1- RECURSE *<br/>
                  ;<br/>
                  <br/>
                  5 FACTORIAL .  ( prints 120 )
                </code>
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">HP RPL</h3>
              <pre className="bg-blue-800 p-4 rounded-md overflow-x-auto text-blue-100">
                <code>
                  &lt;&lt; DUP 0 == <br/>
                  &nbsp;&nbsp;IF DROP 1<br/>
                  &nbsp;&nbsp;ELSE DUP 1 - FACTORIAL *<br/>
                  &nbsp;&nbsp;END<br/>
                  &gt;&gt;<br/>
                  'FACTORIAL' STO<br/>
                  <br/>
                  5 FACTORIAL  ( returns 120 )
                </code>
              </pre>
            </div>
          </div>
        </section>

        <footer className="text-center text-blue-200 mt-8">
          <p>Note: This is a simplified comparison. For more detailed information, please consult official documentation.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;