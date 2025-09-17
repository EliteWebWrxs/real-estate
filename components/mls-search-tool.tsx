"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, ExternalLink } from "lucide-react";

export default function MLSSearchTool() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Card className="mb-8 overflow-hidden border-stone-200 shadow-lg">
      <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-light">
            MLS Property Search
          </h2>
          <p className="text-stone-300 text-sm">
            Real-time listings from Multiple Listing Service
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="text-white hover:bg-stone-800"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-white hover:bg-stone-800"
          >
            <a
              href="https://stellar.mlsmatrix.com/Matrix/public/IDX.aspx?idx=80596fa3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      <div
        className={`bg-white ${
          isFullscreen ? "fixed inset-0 z-50 min-h-screen" : "relative"
        }`}
      >
        {isFullscreen && (
          <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
            <h2 className="font-serif text-xl font-light">
              MLS Property Search - Fullscreen
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFullscreen(false)}
              className="text-white hover:bg-stone-800"
            >
              <Minimize2 className="w-4 h-4" />
            </Button>
          </div>
        )}

        <iframe
          src="https://stellar.mlsmatrix.com/Matrix/public/IDX.aspx?idx=80596fa3"
          width="100%"
          height={isFullscreen ? "100%" : "900px"}
          frameBorder="0"
          marginWidth={0}
          marginHeight={0}
          className="border-0"
          title="MLS Property Search Tool"
        />
      </div>
    </Card>
  );
}
