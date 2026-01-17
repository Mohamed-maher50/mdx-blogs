"use client";
import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import { Check, Code2, Copy, Eye, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
const Code = ({
  code,
  language = "jsx",
  preview,
}: {
  disabled?: boolean;
  code: string;
  language?: string;
  preview: boolean;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <div dir="ltr" className="relative  flex flex-col gap-3 isolate">
      <Tabs defaultValue="code">
        <TabsList>
          <TabsTrigger value="code">
            <Code2 />
          </TabsTrigger>
          <TabsTrigger value="preview">
            <Eye />
          </TabsTrigger>
        </TabsList>
        <LiveProvider
          theme={themes.jettwaveDark}
          language={language}
          noInline
          scope={{
            Sparkles,
            Check,
            Eye,
            code,
            Copy,
          }}
          enableTypeScript
          code={code}
        >
          <TabsContent value="code">
            {<LiveEditor className="text-left text-lg" />}
          </TabsContent>
          <TabsContent value="preview">
            <div className="bg-blue-500/5">{preview && <LivePreview />}</div>
            {preview && <LiveError />}
          </TabsContent>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            className="gap-2 absolute end-5 top-3  bg-transparent"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
              </>
            )}
          </Button>
        </LiveProvider>
      </Tabs>
    </div>
  );
};

export default Code;
